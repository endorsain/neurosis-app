import * as SecureStorage from "expo-secure-store";

export const secureStoreHelper = {
  setItem: async (key, value) => {
    try {
      await SecureStorage.setItemAsync(key, value);
    } catch (error) {
      console.error(error);
    }
  },
  getItem: async (key) => {
    try {
      return await SecureStorage.getItemAsync(key);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  removeItem: async (key) => {
    try {
      await SecureStorage.deleteItemAsync(key);
    } catch (error) {
      console.error(error);
    }
  },
  isAvailable: async () => {
    try {
      return await SecureStorage.isAvailableAsync();
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
