import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated,
  ImageBackground,
} from "react-native";
import React, { useRef } from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import AnimatedHeader from "../utils/AnimatedHeader";
import useAuth from "../hooks/useAuth";
import SearchBar from "react-native-dynamic-search-bar";
import { LinearGradient } from "expo-linear-gradient";
import PromotionCard from "../components/Cards/PromotionCard";
import Categories from "../components/Cards/Categories";
import CutomSlider from "../components/Cards/CutomSlider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import BottomNavigation from "../components/BottomNavigation";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();
  const offset = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="flex-1 bg-white relative"
        forceInset={{ top: "always" }}
      >
        <ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingBottom: 0,
          }}
          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffset: { y: offset } } }],
          //   { useNativeDriver: false }
          // )}
          showsVerticalScrollIndicator={false}
          className="flex-1"
        >
          <View>
            <View className="flex flex-row justify-between mt-4 mx-5 items-center">
              <TouchableOpacity onPress={logout} activeOpacity={0.6}>
                <Image
                  source={{ uri: "https://wallpaperaccess.com/full/51364.jpg" }}
                  resizeMode="contain"
                  className="h-14 w-14 object-cover rounded-full"
                />
              </TouchableOpacity>
              <View className="flex flex-row items-center border  p-4  border-gray-400 rounded-full">
                <Text
                  style={{ fontFamily: "Raleway_500Medium" }}
                  className="text-gray-400 mr-1"
                >
                  Vaibhav's Home
                </Text>
                <AntDesign name="caretdown" size={10} color="gray" />
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate("Notification")} activeOpacity={0.6} className="relative">
                <FontAwesome name="bell" size={24} color="gray" />
                <View className="h-2 absolute -right-1 -top-1 w-2 rounded-full bg-red-600 "></View>
              </TouchableOpacity>
            </View>
            <View className="mx-5 mt-8">
              <Text
                style={{ fontFamily: "Raleway_800ExtraBold" }}
                className="text-3xl text-[#1c3126] mt-2"
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
            <View className="flex flex-row justify-center mx-5 items-center">
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
                  className="bg-gray-50  h-16 rounded-2xl "
                />
              </View>
              <TouchableOpacity activeOpacity={0.6}>
                <LinearGradient
                  colors={["#29B36B", "#30C554"]}
                  className="h-16 w-16 mt-4 mr-4 items-center justify-center rounded-2xl "
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
                title = "New Member"
                subtitle={"Discount"}
                discount = {"40%"}
                id={1}
                actionName={"Claim Now"}
              />
              <PromotionCard
                image={
                  "https://cdn.breadfast.com/wp-content/uploads/2021/12/shopping-mistakes.jpg"
                  
                }
                title = "IPL Offer"
                subtitle={"Discount"}
                discount = {"50%"}
                id={2}
                actionName={"Play Now"}
              />
              <PromotionCard
                image={
                  "https://www.placer.ai/wp-content/uploads/2022/10/korger-albertsons-merger-scaled.jpg"
                }
                title = "Festive Season"
                subtitle={"Discount"}
                discount = {"60%"}
                id={3}
                actionName={"Celebrate Now"}
              />
            </ScrollView>
            <View className="mt-6">
              <Categories />
            </View>
            <View className="mt-6">
              <CutomSlider />
            </View>
          </View>
          <Footer />
        </ScrollView>
        <View className="absolute bottom-0 w-full">
          <BottomNavigation />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
