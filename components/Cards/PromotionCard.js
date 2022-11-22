import { View, Text, ImageBackground } from "react-native";
import React from "react";

const PromotionCard = ({children,image}) => {
  return (
    <View className="h-44 w-80 rounded-3xl mr-3 flex-1">
      <ImageBackground
        source={{
          uri: image,
        }}
        resizeMode="cover"
        imageStyle={{borderRadius:35,opacity:0.8}}
        className="flex-1 justify-center px-4"
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default PromotionCard;
