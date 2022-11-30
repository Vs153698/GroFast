import { AuthProvider } from "./hooks/useAuth";
import RootNavigation from "./hooks/Navigation";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_800ExtraBold,
  Raleway_700Bold,
  Raleway_300Light,
  Raleway_700Bold_Italic,
  Raleway_600SemiBold,
  Raleway_900Black,
} from "@expo-google-fonts/raleway";
import { useState } from "react";
import BiometricScreen from "./screens/BiometricScreen";
import { TailwindProvider } from "tailwindcss-react-native";
import useNotification from "./hooks/useNotification";

export default function App() {
  useNotification();
  const [Authresult, setAuthResult] = useState(false);
  let [fontsLoaded] = useFonts({
    Raleway_800ExtraBold,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_700Bold,
    Raleway_300Light,
    Raleway_700Bold_Italic,
    Raleway_600SemiBold,
    Raleway_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <AuthProvider>
      {!Authresult ? (
        <TailwindProvider>
          <BiometricScreen setResult={setAuthResult} />
        </TailwindProvider>
      ) : (
        <RootNavigation />
      )}
    </AuthProvider>
  );
}
