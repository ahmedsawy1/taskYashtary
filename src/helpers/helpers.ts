import AsyncStorage from '@react-native-async-storage/async-storage';

export enum AsyncKeys {
  COOKIE = 'COOKIE',
  IS_LOGIN = 'IS_LOGIN',
  USER_DATA = 'USER_DATA',
  LANGUAGE = 'LANGUAGE',
  CURRENCY = 'CURRENCY',
  AUTH_TOKEN = 'AUTH_TOKEN',
  NOTIFICATIONS_TOKEN = 'NOTIFICATIONS_TOKEN',
}

export const saveItem = async (key: string, data: object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error: any) {
    console.log(error.message);
  }
  return false;
};

export const getItem = async (key: string) => {
  try {
    const retrievedItem: any = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error: any) {
    console.log(error.message);
  }
  return null;
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error: any) {
    console.log(error.message);
  }
  return false;
};

export const clear = async () => {
  await AsyncStorage.clear();
};
