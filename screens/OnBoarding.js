import { Image } from "react-native";
import React from "react";
import {
  Raleway_800ExtraBold,
  useFonts,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const OnBoarding = () => {
  const naviagtion = useNavigation()
  let [fontsLoaded] = useFonts({
    Raleway_800ExtraBold,
    Raleway_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Onboarding
      bottomBarColor="#fff"
      onDone={()=>naviagtion.navigate("SignUp")}
      onSkip = {()=> naviagtion.navigate("SignUp")}
      titleStyles={{
        paddingHorizontal: 15,
        fontFamily: "Raleway_800ExtraBold",
        fontSize: 34,
      }}
      containerStyles={{backgroundColor:"white"}}
      subTitleStyles={{
        paddingHorizontal: 15,
        fontFamily: "Raleway_400Regular",
        color: "gray",
        fontSize: 15,
      }}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/onboard4.png")}
              className="h-72 w-72"
            />
          ),
          title: "Fresh groceries to your doorstep!",
          subtitle:
            "Fresh groceries delivering to all over the world at a cheapest cost.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/onboard5.png")}
              className="h-72 w-72"
            />
          ),
          title: "Shop your daily necessary!",
          subtitle:
            "Fresh groceries delivering to all over the world at a cheapest cost.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/onboard6.png")}
              className="h-72 w-72"
            />
          ),
          title: "Get ready for the good food!",
          subtitle:
            "Fresh groceries delivering to all over the world at a cheapest cost.",
        },
      ]}
    />
  );
};

export default OnBoarding;
