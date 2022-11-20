import {
  View,
  Text,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  useFonts,
  Raleway_800ExtraBold,
  Raleway_400Regular,
  Raleway_500Medium,
} from "@expo-google-fonts/raleway";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const SignUp = () => {
  const navigation = useNavigation();
  const [isPaaswordVisible, setIsPasswordVisible] = useState(false);
  const [authenticationType, setAuthenticationType] = useState("SignUp");
  let [fontsLoaded] = useFonts({
    Raleway_800ExtraBold,
    Raleway_400Regular,
    Raleway_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  const handleAuthChange = () => {
    if (authenticationType === "SignUp") {
      setAuthenticationType("SignIn");
    } else {
      setAuthenticationType("SignUp");
    }
  };
  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
    >
      <KeyboardAvoidingView>
        <ExpoStatusBar style="auto" />
        <View className="px-8 pt-14">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="border flex w-20 items-center p-3 border-gray-400 rounded-full"
          >
            <AntDesign name="arrowleft" size={24} color={"black"} />
          </TouchableOpacity>
        </View>
        <View className="px-8 pt-14">
          <Text
            style={{ fontFamily: "Raleway_800ExtraBold" }}
            className="text-3xl"
          >
            Welcome to GroFast!
          </Text>
        </View>
        <View className="px-8 pt-14">
          {authenticationType !== "SignUp" && (
            <View>
              <Text
                style={{ fontFamily: "Raleway_500Medium" }}
                className="text-lg text-gray-400"
              >
                Full name
              </Text>
              <View className="flex h-16 rounded-3xl flex-row items-center justify-center mt-2 bg-gray-100 flex-1">
                <View className="ml-12">
                  <FontAwesome name="user-o" size={24} color="black" />
                </View>
                <TextInput
                  keyboardType="ascii-capable"
                  textContentType="name"
                  className="w-full h-16 rounded-3xl px-4"
                  style={{ fontFamily: "Raleway_500Medium" }}
                />
              </View>
            </View>
          )}
          <View className={authenticationType !== "SignUp" && "mt-6"}>
            <Text
              style={{ fontFamily: "Raleway_500Medium" }}
              className="text-lg text-gray-400"
            >
              Email address
            </Text>
            <View className="flex h-16 rounded-3xl flex-row items-center justify-center bg-gray-100 mt-2 flex-1">
              <View className="ml-12">
                <MaterialIcons name="mail-outline" size={24} color="black" />
              </View>
              <TextInput
                textContentType="emailAddress"
                keyboardType="email-address"
                className="w-full h-16 rounded-3xl mt-2 px-4 "
                style={{ fontFamily: "Raleway_500Medium" }}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text
              style={{ fontFamily: "Raleway_500Medium" }}
              className="text-lg text-gray-400"
            >
              Password
            </Text>
            <View className="flex h-16 rounded-3xl px-4 flex-row items-center justify-evenly mt-2 bg-gray-100 flex-1">
              <View className="ml-10 mr-10">
                <MaterialIcons name="lock-outline" size={24} color="black" />
              </View>
              <TextInput
                textContentType="password"
                secureTextEntry={isPaaswordVisible ? false : true}
                className="w-full flex rounded-3xl mt-2 px-4"
                style={{ fontFamily: "Raleway_500Medium" }}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPaaswordVisible)}
                className="mr-12"
              >
                <FontAwesome
                  name={isPaaswordVisible ? "eye" : "eye-slash"}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.6}>
          <LinearGradient
            colors={["#29B36B", "#30C554"]}
            className="mx-10 p-5 flex items-center rounded-full mt-10 flex-1"
          >
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-white text-sm"
            >
              {authenticationType !== "SignUp" ? "Sign Up" : "Sign In"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View className="mt-8">
          <Text
            className="text-center"
            style={{ fontFamily: "Raleway_500Medium" }}
          >
            or with
          </Text>
        </View>
        <View className="mx-8 mt-4 flex flex-row justify-between items-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("phoneVerification")}
            activeOpacity={0.6}
            className="bg-gray-100 h-16 w-20 justify-center items-center p-4 rounded-2xl"
          >
            <FontAwesome name="phone" size={26} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            className="bg-gray-100 h-16 w-20 justify-center items-center p-4 rounded-2xl"
          >
            <FontAwesome name="google-plus" size={26} color="#db4a39" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            className="bg-gray-100 h-16 w-20 justify-center items-center p-4 rounded-2xl"
          >
            <FontAwesome name="facebook" size={26} color="#3B5998" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            className="bg-gray-100 p-4 h-16 w-20 justify-center items-center rounded-2xl"
          >
            <FontAwesome name="twitter" size={26} color="#00ACEE" />
          </TouchableOpacity>
        </View>
        <View className="mt-8">
          <View className="flex items-center justify-center flex-row">
            <Text style={{ fontFamily: "Raleway_500Medium" }}>
              {authenticationType !== "SignUp" ? "Already" : "Don't"} have an
              account?{" "}
            </Text>
            <TouchableOpacity onPress={handleAuthChange} activeOpacity={0.6}>
              <Text
                style={{ fontFamily: "Raleway_800ExtraBold" }}
                className="text-[#29B36B]"
              >
                {authenticationType === "SignIn" ? "Sign In" : "Sign Up"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUp;
