import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CustomSliderCard from './CustomSliderCard'

const CutomSlider = () => {
  return (
    <View>
      <View className="flex flex-row justify-between items-center">
        <Text
          style={{ fontFamily: "Raleway_800ExtraBold" }}
          className="text-2xl text-[#1c3126]"
        >
          Recommended
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
      <ScrollView className="mt-5" horizontal showsHorizontalScrollIndicator={false}>
        <CustomSliderCard image={require("../../assets/f1.png")} title="Mango" price={2.43}/>
        <CustomSliderCard image={require("../../assets/f3.png")} title={"Bread"} price={1.32}/>
        <CustomSliderCard image={require("../../assets/f4.png")} title={"Meat"} price={4.42}/>
        <CustomSliderCard image={require("../../assets/f6.png")} title={"Cheese"} price={5.12}/>
        <CustomSliderCard image={require("../../assets/f2.png")} title={"Raddish"} price={4.32}/>
        <CustomSliderCard image={require("../../assets/f5.png")} title={"Coffee"} price={3.56}/>
      </ScrollView>
    </View>
  )
}

export default CutomSlider