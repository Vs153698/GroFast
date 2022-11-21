import { View, Text, ImageBackground } from "react-native";
import React from "react";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_800ExtraBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";

const PromotionCard = ({children,image}) => {
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
    <View className="h-44 w-80 rounded-3xl mr-3 flex-1">
      <ImageBackground
        source={{
          uri: image,
        }}
        resizeMode="cover"
        imageStyle={{borderRadius:35,opacity:0.7}}
        className="flex-1 justify-center px-4"
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default PromotionCard;
