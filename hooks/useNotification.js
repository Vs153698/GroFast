import { Platform } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
  AndroidImportance,
  getExpoPushTokenAsync,
  getPermissionsAsync,
  removeNotificationSubscription,
  setNotificationChannelAsync,
  setNotificationHandler,
} from "expo-notifications";
import socket from "./Socket";
import { isDevice } from "expo-device";

setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldShowAlert: true,
    shouldSetBadge: false,
  }),
});
const sendPushNotification = async (pushToken, messages) => {
  const message = {
    to: pushToken,
    sound: "default",
    title: messages,
    body: "Early hour sale",
    data: { someData: "goes here" },
  };
  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip,deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};
const registerForPushNotificationsAsync = async () => {
  let token;
  if (isDevice) {
    const { status: existingStatus } = await getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      alert("Failed to get push token for push notification");
      return;
    }
    token = (await getExpoPushTokenAsync()).data;
  } else {
    alert("Must use physical device for push notifications");
  }
  if (Platform.OS === "android") {
    setNotificationChannelAsync("default", {
      name: "default",
      importance: AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
  return token;
};

const useNotification = () => {
  const [pushToken, setPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setPushToken(token));
    notificationListener.current = addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );
    responseListener.current = addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );
    return () => {
      removeNotificationSubscription(notificationListener.current);
      removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    socket.on("ReceivedNotification", (data) => {
      const message = data?.text;
      sendPushNotification(pushToken, message);
    });
  }, [socket]);
  return pushToken;
};

export default useNotification;
