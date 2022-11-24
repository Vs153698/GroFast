import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BaseLayout from '../Layout/BaseLayout'
import InsideHeader from '../components/InsideHeader'
import SearchBar from 'react-native-dynamic-search-bar'
import { Entypo, Ionicons } from '@expo/vector-icons'

const Notification = () => {
  return (
    <BaseLayout classes={"bg-gray-50"}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <InsideHeader title={"Notification"}/>
        <View className="mt-5">
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
    </ScrollView>
    </BaseLayout>
  )
}

export default Notification