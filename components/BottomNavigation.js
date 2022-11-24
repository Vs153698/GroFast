import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <View className="bg-white h-12 flex-row justify-between px-7  items-center rounded-t-2xl border-t-2 border-gray-100  shadow-2xl">
      <TouchableOpacity
        onPress={() => handleTabChange(1)}
        className="items-center h-12 w-12 mt-3 duration-500"
        activeOpacity={0.5}
      >
        <Ionicons
          name={activeTab === 1 ? "ios-home" : "ios-home-outline"}
          size={24}
          color={activeTab === 1 ? "#1c3126" : "lightgray"}
        />
        <Text
          className={`text-xs  text-gray-300 ${
            activeTab === 1 && "text-[#1c3126]"
          }`}
          style={{ fontFamily: "Raleway_500Medium" }}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleTabChange(2)}
        className="items-center h-12 w-12 mt-3 duration-500 "
        activeOpacity={0.5}
      >
        <MaterialCommunityIcons
          name="magnify-scan"
          size={24}
          color={activeTab === 2 ? "#1c3126" : "lightgray"}
        />
        <Text
          className={`text-xs  text-gray-300 ${
            activeTab === 2 && "text-[#1c3126]"
          }`}
          style={{ fontFamily: "Raleway_500Medium" }}
        >
          Scan
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleTabChange(3)}
        className="items-center h-12 w-12 duration-500 mt-3"
        activeOpacity={0.5}
      >
        <Ionicons
          name={activeTab === 3 ? "ios-fast-food" : "ios-fast-food-outline"}
          size={24}
          color={activeTab === 3 ? "#1c3126" : "lightgray"}
        />
        <Text
          className={`text-xs  text-gray-300 ${
            activeTab === 3 && "text-[#1c3126]"
          }`}
          style={{ fontFamily: "Raleway_500Medium" }}
        >
          Food
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleTabChange(4)}
        className="items-center h-12 w-12 duration-500 mt-3"
        activeOpacity={0.5}
      >
        <FontAwesome
          name="shopping-bag"
          size={24}
          color={activeTab === 4 ? "#1c3126" : "lightgray"}
        />
        <Text
          className={`text-xs  text-gray-300 ${
            activeTab === 4 && "text-[#1c3126]"
          }`}
          style={{ fontFamily: "Raleway_500Medium" }}
        >
          Bag
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleTabChange(5)}
        className="items-center h-12 w-12 duration-500 mt-3"
        activeOpacity={0.5}
      >
        <FontAwesome5
          name={activeTab === 5 ? "user-alt" : "user"}
          size={24}
          color={activeTab === 5 ? "#1c3126" : "lightgray"}
        />
        <Text
          className={`text-xs  text-gray-300 ${
            activeTab === 5 && "text-[#1c3126]"
          }`}
          style={{ fontFamily: "Raleway_500Medium" }}
        >
          User
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;
