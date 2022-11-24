import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <View>
      <View className="flex flex-row justify-between mx-5 items-center">
        <Text
          style={{ fontFamily: "Raleway_800ExtraBold" }}
          className="text-2xl text-[#1c3126]"
        >
          Categories
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text
            style={{ fontFamily: "Raleway_500Medium" }}
            className="text-[#29B36B]"
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        className="mt-5 flex-row"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
       <CategoryCard color="bg-red-50" title="Fruits" image={require("../../assets/f1.png")}/>
       <CategoryCard color="bg-blue-50" title="Vegie" image={require("../../assets/f2.png")}/>
       <CategoryCard color="bg-yellow-50" title="Bread" image={require("../../assets/f3.png")}/>
       <CategoryCard color="bg-green-50" title="Meat" image={require("../../assets/f4.png")}/>
       <CategoryCard color="bg-pink-50" title="Drinks" image={require("../../assets/f5.png")}/>
       <CategoryCard color="bg-orange-50" title="Cheese" image={require("../../assets/f6.png")}/>
      </ScrollView>
    </View>
  );
};

export default Categories;
