import { secureStoreHelper } from "../../utils/helper/secure-store";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { clearAuth } from "../../store/slices/auth.slice";
import { useAppDispatch } from "../../store/useStore";
import { router, usePathname } from "expo-router";

export default function HomeScreen() {
  const dispatch = useAppDispatch();

  const pathname = usePathname();
  console.log("HOME SCREEN--: ", pathname);

  async function borrarSecureStore() {
    await secureStoreHelper.removeItem("refreshToken");
    console.log("*****refreshToken eliminado*****");

    await secureStoreHelper.removeItem("idToken");
    console.log("*****idToken eliminado*****");

    dispatch(clearAuth());
    return router.replace("/sign-in");
  }

  return (
    <View style={styles.ctn}>
      <Pressable style={styles.button} onPress={() => borrarSecureStore()}>
        <Text>Borrar SecureStorage</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ctn: {
    backgroundColor: "#63bcde",
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3da3ca",
    height: 40,

    justifyContent: "center",
    alignItems: "center",
  },
});
