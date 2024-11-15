import { SafeAreaView } from "react-native-safe-area-context";
import Signin from "../../components/auth/Signin";
import { StyleSheet, Text } from "react-native";

export default function SigninScreen() {
  return (
    <SafeAreaView style={styles.screen_ctn}>
      <Signin />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen_ctn: {
    backgroundColor: "#973919",

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
