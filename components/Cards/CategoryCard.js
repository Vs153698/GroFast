import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ image, color, title }) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View
        className={`w-20 h-20 rounded-3xl mr-2 flex justify-center items-center ${color}`}
      >
        <Image
          source={image}
          resizeMode="cover"
          className="h-11 w-11"
        />
      </View>
      <Text
        style={{ fontFamily: "Raleway_500Medium" }}
        className="text-center -ml-2  text-gray-400"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
