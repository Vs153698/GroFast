import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../../utils/GlobalStyles";

const CustomSliderCard = ({image,title,price}) => {
  return (
    <View style={globalStyles.backgroundShadow} className={` mb-2 shadow-2xl h-56 w-44 relative rounded-3xl mr-3 ${title === "Mango" && "ml-5"} bg-green-50`}>
      <View className="items-center justify-center mt-8 ">
        <Image
          source={image}
          resizeMode="cover"
          className="h-20 w-20"
        />
      </View>
      <TouchableOpacity activeOpacity={0.4} className="absolute top-3 right-3">
        <Ionicons name="heart-circle-outline" size={34} color={"red"} />
      </TouchableOpacity>
      <View className="px-4">
        <Text
          style={{ fontFamily: "Raleway_800ExtraBold" }}
          className="text-[#1c3126] text-xl"
        >
          {title}
        </Text>
        <View className="flex-row items-center">
          <Text
            style={{ fontFamily: "Raleway_800ExtraBold" }}
            className="text-2xl mt-1 text-[#29B36B]"
          >
            $ {price}
          </Text>
          <Text
            style={{ fontFamily: "Raleway_500Medium" }}
            className="text-gray-400 mt-5"
          >
            /kg
          </Text>
        </View>
      </View>
      <TouchableOpacity
        className="absolute bottom-0 right-0"
        onPress={() => {}}
        activeOpacity={0.6}
      >
        <LinearGradient
          colors={["#29B36B", "#30C554"]}
          className="flex justify-center items-center  rounded-tl-3xl rounded-br-3xl  w-14 h-14"
        >
          <Entypo name="plus" size={24} color="white" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSliderCard;
