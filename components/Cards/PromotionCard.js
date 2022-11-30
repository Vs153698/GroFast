import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../utils/GlobalStyles";

const PromotionCard = ({
  children,
  image,
  id,
  title,
  subtitle,
  discount,
  actionName,
  classes,
}) => {
  const navigation = useNavigation()
  return (
    <View
    style={globalStyles.backgroundShadow}
      className={`h-44 w-80 mb-3 rounded-3xl bg-white ml-3 ${id === 1 && "ml-6"} ${
        id === 3 && "mr-3"
      }  flex-1 ${classes}`}
    >
      <ImageBackground
        source={{
          uri: image,
        }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 24, opacity: 0.8 }}
        className="flex-1 h-44 w-80  justify-center px-4"
      >
        <Text
          style={{ fontFamily: "Raleway_800ExtraBold" }}
          className="text-[#1c3126] text-2xl"
        >
          {title}
        </Text>
        <Text
          style={{ fontFamily: "Raleway_800ExtraBold" }}
          className="text-[#1c3126] text-sm"
        >
          {subtitle}
        </Text>
        <Text
          style={{ fontFamily: "Raleway_800ExtraBold" }}
          className="text-[#1c3126] text-4xl"
        >
          {discount}
        </Text>
        {actionName && <TouchableOpacity onPress={() => navigation.navigate("PromotionPage",{id,title,subtitle,discount,image, actionName})} activeOpacity={0.6}>
          <LinearGradient
            colors={["#29B36B", "#30C554"]}
            className="h-10 w-32 flex items-center justify-center rounded-full mt-3 pb-1"
          >
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-white text-sm"
            >
              {actionName}
            </Text>
          </LinearGradient>
        </TouchableOpacity>}
      </ImageBackground>
    </View>
  );
};

export default PromotionCard;
