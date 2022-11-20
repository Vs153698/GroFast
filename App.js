import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native"; 
import OnBoarding from "./screens/OnBoarding";
import PhoneLogin from "./screens/PhoneLogin";
import SignUp from "./screens/SignUp";
import Verification from "./screens/Verification";
import Home from "./screens/Home"

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
    <TailwindProvider>
      <ExpoStatusBar style="dark"/>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" options={{headerShown:false}} component={OnBoarding}/>
        <Stack.Screen name = "SignUp" options={{headerShown:false}} component={SignUp} />
        <Stack.Screen name = "phoneVerification" options={{headerShown:false}} component={PhoneLogin} />
        <Stack.Screen name = "Verification" options={{headerShown:false}} component={Verification} />
        <Stack.Screen name = "Home" options={{headerShown:false}} component={Home} />
      </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
