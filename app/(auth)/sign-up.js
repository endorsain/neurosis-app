import { SafeAreaView } from "react-native-safe-area-context";
import Signup from "../../components/auth/Signup";
import { StyleSheet } from "react-native";

export default function SignupScreen() {
  return (
    <SafeAreaView style={styles.screen_ctn}>
      <Signup />
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
