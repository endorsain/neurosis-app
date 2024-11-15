import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncStorageHelper = {
  setItem: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  },
  getItem: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  removeItem: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  },
  clear: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error(error);
    }
  },
};
