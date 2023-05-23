import { createContext, useEffect, useState } from 'react';
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from '@storage/storageUser';
import { UserDTO } from '@dtos/userDTO';

export type AuthContextDataProps = {
  signIn: (user: UserDTO) => Promise<void>;
  signOut: () => Promise<void>;
  userData: UserDTO;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [userData, setUserData] = useState<UserDTO>({} as UserDTO);

  async function signIn(user: UserDTO) {
    if (user) {
      await storageUserSave(user);
      setUserData(user);
    }
  }

  async function signOut() {
    setUserData({} as UserDTO);
    await storageUserRemove();
  }

  async function loadUserData() {
    const userLogged = await storageUserGet();

    if (userLogged) {
      setUserData(userLogged);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, userData }}>
      {children}
    </AuthContext.Provider>
  );
}
