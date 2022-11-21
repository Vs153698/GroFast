import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
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
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { authentication } from "../firebase/firebase";

const Verification = ({ route }) => {
  const [otp11, setOtp11] = useState();
  const [otp22, setOtp22] = useState();
  const [otp66, setOtp66] = useState();
  const [otp33, setOtp33] = useState();
  const [otp44, setOtp44] = useState();
  const [otp55, setOtp55] = useState();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const otp1 = useRef();
  const otp2 = useRef();
  const otp3 = useRef();
  const otp4 = useRef();
  const otp5 = useRef();
  const otp6 = useRef();
  const { VerificationId } = route.params;
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
    setOtp11(text);
    otp2.current.focus();
  };
  const handleOtpChange2 = (text) => {
    if (text === "") {
      return otp1.current.focus();
    }
    setOtp22(text);
    otp3.current.focus();
  };
  const handleOtpChange3 = (text) => {
    if (text === "") {
      return otp2.current.focus();
    }
    setOtp33(text);
    otp4.current.focus();
  };
  const handleOtpChange4 = (text) => {
    if (text === "") {
      return otp3.current.focus();
    }
    setOtp44(text);
    otp5.current.focus();
  };
  const handleOtpChange5 = (text) => {
    if (text === "") {
      return otp4.current.focus();
    }
    setOtp55(text);
    otp6.current.focus();
  };
  const handleOtpVerification = async () => {
    try {
      setLoading(true);
      const Verificationcode = otp11 + otp22 + otp33 + otp44 + otp55 + otp66;
      const credential = PhoneAuthProvider.credential(
        VerificationId,
        Verificationcode
      );
      await signInWithCredential(authentication, credential);
      navigation.navigate("Home");
      setLoading(false);
    } catch {
      (err) => {
        setLoading(false);
        Alert.alert("OTP Expired, Please Retry!");
      };
    }
  };
  const handleOtpChange6 = (text) => {
    if (text === "") {
      return otp5.current.focus();
    }
    setOtp66(text);
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
            autoComplete="sms-otp"
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
            autoComplete="sms-otp"
            textContentType="oneTimeCode"
            style={{ fontFamily: "Raleway_500Medium" }}
            maxLength={1}
            className="bg-gray-100 mx-8 w-14 h-14 p-5 rounded-2xl"
          />
          <TextInput
            keyboardType="numeric"
            onChangeText={handleOtpChange3}
            ref={otp3}
            autoComplete="sms-otp"
            textContentType="oneTimeCode"
            style={{ fontFamily: "Raleway_500Medium" }}
            maxLength={1}
            className="bg-gray-100 mx-8 w-14 h-14 p-5 rounded-2xl"
          />
          <TextInput
            keyboardType="numeric"
            onChangeText={handleOtpChange4}
            ref={otp4}
            autoComplete="sms-otp"
            textContentType="oneTimeCode"
            style={{ fontFamily: "Raleway_500Medium" }}
            maxLength={1}
            className="bg-gray-100 mx-8 w-14 h-14 p-5 rounded-2xl"
          />
          <TextInput
            keyboardType="numeric"
            onChangeText={handleOtpChange5}
            ref={otp5}
            autoComplete="sms-otp"
            textContentType="oneTimeCode"
            style={{ fontFamily: "Raleway_500Medium" }}
            maxLength={1}
            className="bg-gray-100 mx-8 w-14 h-14 p-5 rounded-2xl"
          />
          <TextInput
            keyboardType="numeric"
            onChangeText={handleOtpChange6}
            ref={otp6}
            autoComplete="sms-otp"
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
        {loading ? (
          <View className="mt-10">
            <ActivityIndicator size={"large"} color="#29B36B" />
          </View>
        ) : (
          <TouchableOpacity onPress={handleOtpVerification} activeOpacity={0.6}>
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
        )}
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
