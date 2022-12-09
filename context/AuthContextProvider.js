import React, { createContext, useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  async function login(username, password) {
    if (username && password) {
      setUser({ username: username, password: password });
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({
          username: username,
          password: password,
        })
      );
    }
  }

  useEffect(() => {
    LoadData();
  }, []);

  async function LoadData() {
    const stored_user = await AsyncStorage.getItem("user");
    if (stored_user) {
      setUser(JSON.parse(stored_user));
    } else {
      setUser(null);
    }
  }
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
