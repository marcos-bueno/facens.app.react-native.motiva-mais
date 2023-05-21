import AsyncStorage from '@react-native-async-storage/async-storage';

import { USER_STORAGE } from '@storage/storageConfig';
import { UserDTO } from '@dtos/userDTO';

export async function storageUserSave(data: any) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(data));
}

export async function storageUserGet() {
  const storage = await AsyncStorage.getItem(USER_STORAGE);

  const user: UserDTO = storage ? JSON.parse(storage) : {};

  return user;
}

export async function storageUserRemove() {
  await AsyncStorage.removeItem(USER_STORAGE);
}
