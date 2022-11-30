import {
  View,
  Text,
  BackHandler,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import React, { useEffect, useState } from "react";
import { globalStyles } from "../utils/GlobalStyles";
const BiometricScreen = ({ setResult }) => {
  const [AuthModal, setAuthModal] = useState(false);
  const auth = async () => {
    const authResult = await LocalAuthentication.authenticateAsync({
      promptMessage: "Unlock Grofast",
    });
    if (authResult?.success === false) {
      return setAuthModal(true);
    }
    setResult(authResult?.success);
  };
  useEffect(() => {
    auth();
  }, []);
  const handleCancelModal = () => {
    BackHandler.exitApp();
    setAuthModal(false);
  };
  return (
    <>
      <View className="flex-1 justify-center items-center mt-4">
        <Modal animationType="slide" transparent={true} visible={AuthModal}>
          <View className="flex-1 justify-center items-center mt-4">
            <View
              className="bg-white m-14 rounded-3xl p-8 "
              style={globalStyles.backgroundShadowModal}
            >
              <Text
                className="text-xl text-center"
                style={{ fontFamily: "Raleway_700Bold" }}
              >
                Please Authenticate
              </Text>
              <Text className="text-sm text-center">
                Grofast protects your data to avoid unauthorized access. Please
                unlock Grofast to contine.
              </Text>
              <View className="mt-4 flex-row justify-evenly">
                <TouchableOpacity
                  onPress={handleCancelModal}
                  activeOpacity={0.6}
                >
                  <Text
                    className="text-xl text-red-500 text-center"
                    style={{ fontFamily: "Raleway_700Bold" }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={auth} activeOpacity={0.6}>
                  <Text
                    className="text-xl text-blue-500 text-center"
                    style={{ fontFamily: "Raleway_700Bold" }}
                  >
                    Unlock
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View className="bg-white flex-1 items-center justify-end">
        <Image
          source={require("../assets/finger.png")}
          resizeMode="cover"
          className="h-44 w-44"
        />
        <Text
          className="text-5xl mb-2"
          style={{ fontFamily: "Raleway_700Bold" }}
        >
          Grofast
        </Text>
        <Text
          className="text-2xl text-gray-600 mb-12 "
          style={{ fontFamily: "Raleway_500Medium" }}
        >
          Shop and eat healthy
        </Text>
      </View>
    </>
  );
};

export default BiometricScreen;
