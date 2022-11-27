import { AuthProvider } from "./hooks/useAuth";
import RootNavigation from "./hooks/Navigation";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_800ExtraBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import { authenticateAsync } from "expo-local-authentication";
import { useEffect, useRef, useState } from "react";
import { addNotificationReceivedListener, addNotificationResponseReceivedListener, AndroidImportance, getExpoPushTokenAsync, getPermissionsAsync, removeNotificationSubscription, setNotificationChannelAsync, setNotificationHandler } from "expo-notifications";
import { async } from "@firebase/util";
import { isDevice } from "expo-device";
import { BackHandler, Platform } from "react-native";
import socket from "./hooks/Socket";

setNotificationHandler({
  handleNotification: async()=>({
    shouldPlaySound:false,
    shouldShowAlert:true,
    shouldSetBadge:false
  })
})
const sendPushNotification=async(pushToken) =>{
  const message = {
    to: pushToken,
    sound: 'default',
    title: "GroFast First Notification",
    body: "Early hour sale",
    data:{someData:"goes here"}
  }
  await fetch('https://exp.host/--/api/v2/push/send',{
    method:"POST",
    headers:{
      Accept : "application/json",
      "Accept-encoding": "gzip,deflate",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  })
}
const registerForPushNotificationsAsync = async()=>{
  let token;
  if(isDevice){
    const {status: existingStatus} = await getPermissionsAsync()
    let finalStatus = existingStatus;
    if(existingStatus !== 'granted'){
      alert("Failed to get push token for push notification")
      return;
    }
    token = (await getExpoPushTokenAsync()).data;
    console.log(token)
  }else{
    alert("Must use physical device for push notifications")
  }
  if(Platform.OS === "android"){
    setNotificationChannelAsync('default',{
      name:"default",
      importance: AndroidImportance.MAX,
      vibrationPattern:[0,250,250,250],
      lightColor:"#FF231F7C"
    })
  }
  return token;
}

export default function App() {
  const [pushToken,setPushToken] = useState("")
  const [notification,setNotification] = useState(false)
  const [localAuth,setLocalAuth] = useState(false)
  const notificationListener = useRef()
  const responseListener = useRef()
  useEffect(() => {
    
      socket.on("connection",(data)=>{
        console.log("Socket.io is connected now",)
      })
    

  }, [socket])
  
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setPushToken(token))
    notificationListener.current = addNotificationReceivedListener(notification=>{
      setNotification(notification)
    })
    responseListener.current = addNotificationResponseReceivedListener(response => {
      console.log(response)
    })
    return ()=> {
      removeNotificationSubscription(notificationListener.current)
      removeNotificationSubscription(responseListener.current)
    }
  }, [])
  
  useEffect(() => {
    const auth = async()=>{
      const authResult = await authenticateAsync({disableDeviceFallback:true,promptMessage:"Confirm to unlock",cancelLabel:"Cancel Authentication",requireConfirmation:false})
      console.log("authResult is ",authResult)
      if(authResult?.success === false){
        return BackHandler.exitApp()
      }
      setLocalAuth(authResult?.success)
      setTimeout(() => {
        sendPushNotification(pushToken)
      }, 5000);
    }
    auth()
  }, [])
  
  let [fontsLoaded] = useFonts({
    Raleway_800ExtraBold,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <AuthProvider>
      {localAuth && <RootNavigation />}
    </AuthProvider>
  );
}


