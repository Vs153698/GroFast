import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import PromotionCard from "../components/Cards/PromotionCard";
import { LinearGradient } from "expo-linear-gradient";
import InsideHeader from "../components/InsideHeader";
import socket from "../hooks/Socket";

const PromotionPage = ({ route }) => {
  const navigation = useNavigation();
  const { id, title, subtitle, discount,image, actionName } = route.params;
  const sendMessage = ()=>{
    socket.emit("sendNotification",{message:"Shop this afternoon and win prizes."})
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="flex-1 bg-white relative"
        forceInset={{ top: "always" }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
        <InsideHeader title={"Coupon Detail"} />

        
        <View className="mx-6">
          <View className="mt-8">
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-[#1c3126] text-4xl"
            >
              {title}
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-[#1c3126] text-4xl"
            >
              {subtitle}
            </Text>
            <Text
              className="text-gray-500 text-lg"
              style={{ fontFamily: "Raleway_500Medium" }}
            >
              24/11/2022
            </Text>
          </View>
        </View>
        <View className="mt-8 items-center mx-6">
        <PromotionCard title={title} subtitle={subtitle} discount={discount} image={image} classes="w-full ml-0"/>
        </View>
        <View className="mx-6 mt-10">
          <Text className="text-gray-500 text-lg"
              style={{ fontFamily: "Raleway_500Medium" }}>Details</Text>
              <Text className="text-sm text-gray-400" style={{ fontFamily: "Raleway_500Medium" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non dui gravida, mattis quam id, ultricies neque. Morbi convallis sem velit, quis condimentum velit pretium in. Nullam varius ornare mi, ut dapibus arcu varius at. Morbi justo ligula, pellentesque et varius vel, maximus sit amet augue.</Text>
              <Text className="mt-5 text-sm text-gray-400" style={{ fontFamily: "Raleway_500Medium" }}>Vestibulum turpis mi, maximus eget lacinia accumsan, faucibus eu purus. Nam at mi a libero consectetur hendrerit. Sed ultricies a justo dictum scelerisque. Donec placerat massa tortor, in aliquet risus aliquam in. Morbi ut molestie est. Nulla sit amet eros quis odio interdum vestibulum. Pellentesque dapibus mauris at libero eleifend consectetur.</Text>
        </View>
        <View className="mx-6 mt-10">
          <Text className="text-gray-500 text-lg"
              style={{ fontFamily: "Raleway_500Medium" }}>How to use</Text>
              <Text className="text-sm text-gray-400" style={{ fontFamily: "Raleway_500Medium" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non dui gravida, mattis quam id, ultricies neque. Morbi convallis sem velit, quis condimentum velit pretium in. Nullam varius ornare mi, ut dapibus arcu varius at. Morbi justo ligula, pellentesque et varius vel, maximus sit amet augue.</Text>
              <Text className="mt-5 text-sm text-gray-400" style={{ fontFamily: "Raleway_500Medium" }}>Vestibulum turpis mi, maximus eget lacinia accumsan, faucibus eu purus. Nam at mi a libero consectetur hendrerit. Sed ultricies a justo dictum scelerisque. Donec placerat massa tortor, in aliquet risus aliquam in. Morbi ut molestie est. Nulla sit amet eros quis odio interdum vestibulum. Pellentesque dapibus mauris at libero eleifend consectetur.</Text>
        </View>
        </ScrollView>
        <View>
        <TouchableOpacity onPress={sendMessage}  activeOpacity={0.6}>
            <LinearGradient
              colors={["#29B36B", "#30C554"]}
              className="mx-10 p-5 flex items-center rounded-full mt-5 mb-2 flex-1"
            >
              <Text
                style={{ fontFamily: "Raleway_800ExtraBold" }}
                className="text-white text-sm"
              >
                {actionName}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default PromotionPage;
