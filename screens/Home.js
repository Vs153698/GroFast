import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_800ExtraBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const Home = () => {
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
    <View className="mx-5 mt-14">
      <View className="flex flex-row justify-between items-center">
        <TouchableOpacity activeOpacity={0.6}>
          <Image
            source={{ uri: "https://wallpaperaccess.com/full/51364.jpg" }}
            resizeMode="contain"
            className="h-14 w-14 object-cover rounded-full"
          />
        </TouchableOpacity>
        <View className="flex flex-row items-center border p-4 border-gray-400 rounded-full">
          <Text
            style={{ fontFamily: "Raleway_500Medium" }}
            className="text-gray-400 mr-1"
          >
            Vaibhav's Home
          </Text>
          <AntDesign name="caretdown" size={10} color="gray" />
        </View>
        <TouchableOpacity activeOpacity={0.6} className="relative">
          <FontAwesome name="bell" size={24} color="gray"/>
          <View className="h-2 absolute -right-1 -top-1 w-2 rounded-full bg-red-600 "></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
