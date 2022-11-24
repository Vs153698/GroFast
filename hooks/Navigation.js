import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { TailwindProvider } from "tailwindcss-react-native";
import OnBoarding from "../screens/OnBoarding";
import SignUp from "../screens/SignUp";
import PhoneLogin from "../screens/PhoneLogin";
import Verification from "../screens/Verification";
import Home from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "./useAuth";
import PromotionPage from "../screens/PromotionPage";
import Notification from "../screens/Notification";

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  const { currentUser } = useAuth();
  return (
    <NavigationContainer>
      <TailwindProvider>
        <ExpoStatusBar style="dark" />
        <Stack.Navigator>
          {!currentUser ? (
            <Stack.Group>
              <Stack.Screen
                name="OnBoarding"
                options={{ headerShown: false }}
                component={OnBoarding}
              />
              <Stack.Screen
                name="SignUp"
                options={{ headerShown: false }}
                component={SignUp}
              />
              <Stack.Screen
                name="phoneVerification"
                options={{ headerShown: false }}
                component={PhoneLogin}
              />
              <Stack.Screen
                name="Verification"
                options={{ headerShown: false }}
                component={Verification}
              />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={Home}
              />
              <Stack.Screen
                name="PromotionPage"
                options={{ headerShown: false }}
                component={PromotionPage}
              />
              <Stack.Screen
                name="Notification"
                options={{ headerShown: false }}
                component={Notification}
              />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default RootNavigation;

