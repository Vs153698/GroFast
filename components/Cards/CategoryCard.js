import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../utils/GlobalStyles";

const CategoryCard = ({ image, color, title }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} className="">
      <View
      style={globalStyles.backgroundShadow}
        className={`w-20 h-20 rounded-3xl ml-3 ${title==="Fruits" && "ml-6"} ${title==="Cheese" && "mr-3"} flex justify-center items-center ${color}`}
      >
        <Image
          source={image}
          resizeMode="cover"
          className="h-11 w-11"
        />
      </View>
      <Text
        style={{ fontFamily: "Raleway_500Medium",...globalStyles.backgroundShadow }}
        className="text-center ml-2  text-gray-400"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
