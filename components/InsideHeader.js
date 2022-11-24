import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

const InsideHeader = ({title,children}) => {
    const navigation = useNavigation()
  return (
    <View className="px-6 pt-6 flex-row items-center justify-between">
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="border flex w-20 items-center p-3 border-gray-400 rounded-full"
    >
      <AntDesign name="arrowleft" size={24} color={"black"} />
    </TouchableOpacity>
    <Text
      className="text-gray-500"
      style={{ fontFamily: "Raleway_500Medium" }}
    >
      {title}
    </Text>
    {!children ? <Text className=""></Text> : children}
  </View>
  )
}

export default InsideHeader