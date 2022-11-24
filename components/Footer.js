import { View, Text } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View className="pb-20 mt-4 pt-10 pl-3 bg-gray-50  flex-1">
      <Text className="text-gray-700 font-extrabold text-7xl">Live</Text>
      <Text className="text-gray-700 font-extrabold text-7xl">it up!</Text>
      <Text className="text-xl text-gray-600 font-semibold mt-3">
        Made with ❤️ in Rajasthan, India
      </Text>
    </View>
  )
}

export default Footer