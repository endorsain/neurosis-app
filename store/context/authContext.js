import { useAppDispatch, useAppSelector } from "../useStore";
import { router, useSegments } from "expo-router";
import { checkAuth } from "./check-auth";
import { Provider } from "react-redux";
import { Text } from "react-native";
import { useEffect } from "react";
import { store } from "..";

export function ReduxProvider({ children }) {
  console.log("ReduxProvider");
  return <Provider store={store}>{children}</Provider>;
}

export function AuthProvider({ children }) {
  console.log("AuthProvider");
  const segments = useSegments();
  const dispatch = useAppDispatch();

  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    console.log("loading: ", loading);
    console.log("isAuthenticated: ", isAuthenticated);
    console.log("segment: ", segments);

    const inAuthGroup = segments[0] === "(auth)";

    if (!loading && isAuthenticated && inAuthGroup) {
      router.replace("/");
    } else if (!loading && !isAuthenticated && !inAuthGroup) {
      router.replace("/sign-in");
    }
  }, [isAuthenticated, loading, router, segments]);

  if (loading) {
    return <Text>loading...</Text>;
  }

  return <>{children}</>;
}
