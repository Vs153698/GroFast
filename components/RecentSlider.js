import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

const RecentSlider = ({ classes, data }) => {
  return (
    <ScrollView horizontal className="flex-row mt-6">
      {data?.map((item, index) => (
        <TouchableOpacity key={index} style={{minWidth:80}} className={`bg-gray-50 p-4 border border-gray-400 rounded-full min-w-min ml-3 ${
            index === 0 && "ml-6"
          } ${index === data?.length - 1 && "mr-4"}  ${classes}`}
        >
          <Text style={{ fontFamily: "Raleway_500Medium" }} className="text-center text-sm w-full">{item?.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default RecentSlider;
