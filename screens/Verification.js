import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useRef } from "react";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_800ExtraBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import { useNavigation } from "@react-navigation/native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Verification = () => {
  const navigation = useNavigation();
  const otp1 = useRef();
  const otp2 = useRef();
  const otp3 = useRef();
  const otp4 = useRef();
  const otp5 = useRef();
  const otp6 = useRef();
  let [fontsLoaded] = useFonts({
    Raleway_800ExtraBold,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  const handleOtpChange1 = (text) => {
    if (text === "") {
      return otp1.current.focus();
    }
    otp2.current.focus();
  };
  const handleOtpChange2 = (text) => {
    if (text === "") {
      return otp1.current.focus();
    }
    otp3.current.focus();
  };
  const handleOtpChange3 = (text) => {
    if (text === "") {
      return otp2.current.focus();
    }
    otp4.current.focus();
  };
  const handleOtpChange4 = (text) => {
    if (text === "") {
      return otp3.current.focus();
    }
    otp5.current.focus();
  };
  const handleOtpChange5 = (text) => {
    if (text === "") {
      return otp4.current.focus();
    }
    otp6.current.focus();
  };
  const handleOtpChange6 = (text) => {
    if (text === "") {
      return otp5.current.focus();
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
            Verify your
          </Text>
          <Text
            style={{ fontFamily: "Raleway_800ExtraBold" }}
            className="text-3xl"
          >
            Identity
          </Text>
          <Text
            className="mt-4 text-gray-400"
            style={{ fontFamily: "Raleway_700Bold" }}
          >
            We have just sent a code to
          </Text>
          <Text
            className="text-gray-400"
            style={{ fontFamily: "Raleway_700Bold" }}
          >
            8112253746
          </Text>
        </View>
        <View className="flex flex-row justify-around items-center mx-6 mt-12">
          <TextInput
            keyboardType="numeric"
            onChangeText={handleOtpChange1}
            ref={otp1}
            textContentType="oneTimeCode"
            style={{ fontFamily: "Raleway_500Medium" }}
            maxLength={1}
            className="bg-gray-100 mx-8 w-14 h-14  p-5 rounded-2xl"
          />
          <TextInput
            keyboardType="numeric"
            onChangeText={handleOtpChange2}
            ref={otp2}
            textContentType="oneTimeCode"
            style={{ fontFamily: "Raleway_500Medium" }}
            maxLength={1}
            className="bg-gray-100 mx-8 w-14 h-14 p-5 rounded-2xl"
          />
          <TextInput
            keyboardType="numeric"
            onChangeText={handleOtpChange3}
            ref={otp3}
            textContentType="oneTimeCode"
            style={{ fontFamily: "Raleway_500Medium" }}
            maxLength={1}
            className="bg-gray-100 mx-8 w-14 h-14 p-5 rounded-2xl"
          />
          <TextInput
            keyboardType="numeric"
            onChangeText={handleOtpChange4}
            ref={otp4}
            textContentType="oneTimeCode"
            style={{ fontFamily: "Raleway_500Medium" }}
            maxLength={1}
            className="bg-gray-100 mx-8 w-14 h-14 p-5 rounded-2xl"
          />
          <TextInput
            keyboardType="numeric"
            onChangeText={handleOtpChange5}
            ref={otp5}
            textContentType="oneTimeCode"
            style={{ fontFamily: "Raleway_500Medium" }}
            maxLength={1}
            className="bg-gray-100 mx-8 w-14 h-14 p-5 rounded-2xl"
          />
          <TextInput
            keyboardType="numeric"
            onChangeText={handleOtpChange6}
            ref={otp6}
            textContentType="oneTimeCode"
            style={{ fontFamily: "Raleway_500Medium" }}
            maxLength={1}
            className="bg-gray-100 mx-8 w-14 h-14 p-5 rounded-2xl"
          />
        </View>
        <View className="flex flex-row justify-center items-center mt-4">
          <Text
            style={{ fontFamily: "Raleway_500Medium" }}
            className="text-gray-500"
          >
            Didn't receive the code?
          </Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text
              style={{ fontFamily: "Raleway_700Bold" }}
              className="text-[#29B36B] "
            >
              {" "}
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} activeOpacity={0.6}>
          <LinearGradient
            colors={["#29B36B", "#30C554"]}
            className="mx-10 p-5 flex items-center rounded-full mt-14 flex-1"
          >
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-white text-sm"
            >
              Verification
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <View className="flex justify-center items-center mt-8">
          <Text
            className="text-gray-400"
            style={{ fontFamily: "Raleway_500Medium" }}
          >
            By Signing up, you agree to our
          </Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text
              className="text-[#29B36B]"
              style={{ fontFamily: "Raleway_700Bold" }}
            >
              Term and Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Verification;
