import { usePathname } from "expo-router";
import { View, Text } from "react-native";

export default function SettingsScreen() {
  const pathname = usePathname();
  console.log("SETTINGS SCREEN--: ", pathname);
  return (
    <View>
      <Text>Settings Screen</Text>
      <Text>xd</Text>
      <Text>xd</Text>
    </View>
  );
}

/* 
 TODO: A TENER EN CUENTA EL PROCESO
 LOG  AuthProvider
 LOG  HOME SCREEN--:  /
 LOG  loading:  false
 LOG  isAuthenticated:  true
 LOG  segment:  ["(tabs)"]
 LOG  AuthProvider
 LOG  AuthProvider
 LOG  SETTINGS SCREEN--:  /settings <----- raro
 LOG  loading:  false
 LOG  isAuthenticated:  true
 LOG  segment:  ["(tabs)", "settings"]
 LOG  HOME SCREEN--:  /settings <----- raro
*/
