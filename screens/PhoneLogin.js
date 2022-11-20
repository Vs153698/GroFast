import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Raleway_800ExtraBold,
  Raleway_700Bold,
  Raleway_400Regular,
  Raleway_500Medium,
} from "@expo-google-fonts/raleway";
import { CountryPicker } from "react-native-country-codes-picker";
import { LinearGradient } from "expo-linear-gradient";

const PhoneLogin = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const navigation = useNavigation();
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
    <ScrollView
      className="bg-white flex-1 "
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
          <Text
            style={{ fontFamily: "Raleway_700Bold" }}
            className="pt-2 text-gray-400"
          >
            Insert your phone number to continue
          </Text>
        </View>
        <View className="flex flex-row items-center justify-center mx-8 mt-14">
          <TouchableOpacity
            onPress={() => setShow(true)}
            className="px-5 h-14 flex flex-row items-center justify-center w-24 bg-gray-100 rounded-l-full"
          >
            <Text style={{ fontFamily: "Raleway_500Medium" }} className="mr-1">
              {countryCode}{" "}
            </Text>
            <FontAwesome name="chevron-down" size={14} color="gray" />
          </TouchableOpacity>
          <TextInput
            textContentType="telephoneNumber"
            style={{ fontFamily: "Raleway_500Medium" }}
            keyboardType="numeric"
            className="flex-1 px-4 rounded-r-full  h-14 bg-gray-100"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Verification")}
          activeOpacity={0.6}
        >
          <LinearGradient
            colors={["#29B36B", "#30C554"]}
            className="mx-10 p-5 flex flex-row justify-center items-center rounded-full mt-10 flex-1"
          >
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-white text-sm"
            >
              Request OTP
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <CountryPicker
          onBackdropPress={() => setShow(false)}
          show={show}
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setShow(false);
          }}
        />
        <View className="mt-14">
          <Text
            className="text-center"
            style={{ fontFamily: "Raleway_500Medium" }}
          >
            or SignIn with
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
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              activeOpacity={0.6}
            >
              <Text
                style={{ fontFamily: "Raleway_800ExtraBold" }}
                className="text-[#29B36B]"
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PhoneLogin;
