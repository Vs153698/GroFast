import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import useAuth from "../hooks/useAuth";
import SearchBar from "react-native-dynamic-search-bar";
import { LinearGradient } from "expo-linear-gradient";
import PromotionCard from "../components/Cards/PromotionCard";
import Categories from "../components/Cards/Categories";
import CutomSlider from "../components/Cards/CutomSlider";

const Home = () => {
  const { logout } = useAuth();
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-white flex-1">
      <View className="mx-5 mt-14">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={logout} activeOpacity={0.6}>
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
            <FontAwesome name="bell" size={24} color="gray" />
            <View className="h-2 absolute -right-1 -top-1 w-2 rounded-full bg-red-600 "></View>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{ fontFamily: "Raleway_800ExtraBold" }}
            className="text-3xl text-[#1c3126] mt-12"
          >
            Hey Vaibhav 👋
          </Text>
          <Text
            style={{ fontFamily: "Raleway_700Bold" }}
            className="text-lg text-gray-400 mt-1"
          >
            Find fresh groceries you want
          </Text>
        </View>
        <View className="flex flex-row justify-center mx-8 items-center">
          <View className="mt-4">
            <SearchBar
              placeholderTextColor="lightgray"
              spinnerColor="#29B36B"
              searchIconComponent={
                <Ionicons name="md-search" size={24} color="#29B36B" />
              }
              clearIconComponent={
                <Entypo name="cross" size={24} color="#EC534A" />
              }
              textInputStyle={{ fontFamily: "Raleway_500Medium" }}
              placeholder="Search fresh groceries"
              iconColor="#12345F"
              className="bg-gray-50  h-16 rounded-2xl w-full"
            />
          </View>
          <TouchableOpacity activeOpacity={0.6}>
            <LinearGradient
              colors={["#29B36B", "#30C554"]}
              className="h-16 w-16 mt-4 ml-2 items-center justify-center rounded-2xl "
            >
              <MaterialCommunityIcons
                name="magnify-scan"
                size={30}
                color="white"
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="w-full mt-4"
        >
          <PromotionCard
            image={
              "https://thumbs.dreamstime.com/b/shopping-paper-bag-different-groceries-light-blue-background-flat-lay-space-text-156220126.jpg"
            }
          >
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-[#1c3126] text-2xl"
            >
              New Member
            </Text>
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-[#1c3126] text-sm"
            >
              discount
            </Text>
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-[#1c3126] text-4xl"
            >
              40%
            </Text>
            <TouchableOpacity activeOpacity={0.6}>
              <LinearGradient
                colors={["#29B36B", "#30C554"]}
                className="h-10 w-32 flex items-center justify-center rounded-full mt-3 pb-1"
              >
                <Text
                  style={{ fontFamily: "Raleway_800ExtraBold" }}
                  className="text-white text-sm"
                >
                  Claim Now
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </PromotionCard>
          <PromotionCard
            image={
              "https://cdn.breadfast.com/wp-content/uploads/2021/12/shopping-mistakes.jpg"
            }
          >
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-[#1c3126] text-2xl"
            >
              IPL Offer
            </Text>
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-[#1c3126] text-sm"
            >
              discount
            </Text>
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-[#1c3126] text-4xl"
            >
              50%
            </Text>
            <TouchableOpacity activeOpacity={0.6}>
              <LinearGradient
                colors={["#29B36B", "#30C554"]}
                className="h-10 w-32 flex items-center justify-center rounded-full mt-3 pb-1"
              >
                <Text
                  style={{ fontFamily: "Raleway_800ExtraBold" }}
                  className="text-white text-sm"
                >
                  Play Now
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </PromotionCard>
          <PromotionCard
            image={
              "https://www.placer.ai/wp-content/uploads/2022/10/korger-albertsons-merger-scaled.jpg"
            }
          >
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-[#1c3126] text-2xl"
            >
              Festive Sale
            </Text>
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-[#1c3126] text-sm"
            >
              discount
            </Text>
            <Text
              style={{ fontFamily: "Raleway_800ExtraBold" }}
              className="text-[#1c3126] text-4xl"
            >
              30%
            </Text>
            <TouchableOpacity activeOpacity={0.6}>
              <LinearGradient
                colors={["#29B36B", "#30C554"]}
                className="h-10 w-32 flex-row flex items-center justify-center rounded-full mt-3 pb-1"
              >
                <Text
                  style={{ fontFamily: "Raleway_800ExtraBold" }}
                  className="text-white text-sm"
                >
                  Celebrate Now
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </PromotionCard>
        </ScrollView>
        <View className="mt-6">
          <Categories />
        </View>
        <View className="mt-6">
          <CutomSlider />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
