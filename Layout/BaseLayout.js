import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const BaseLayout = ({ children,classes,props }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        className={`flex-1 bg-white relative ${classes}`}
        forceInset={{ top: "always" }}
        {...props}
      >
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BaseLayout;
