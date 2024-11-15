import { AuthProvider, ReduxProvider } from "../../store/context/authContext";
//import { Stack } from "expo-router/stack";
import { Slot } from "expo-router";

export default function AuthLayout() {
  return (
    <ReduxProvider>
      <AuthProvider>
        {/* <Stack
          screenOptions={{ headerShown: false }}
          initialRouteName="sign-in"
        /> */}
        <Slot />
      </AuthProvider>
    </ReduxProvider>
  );
}
