import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./auth/LoginScreen";
import AuthNavigation from "./navigation/AuthNavigation";
import HomeNavigation from "./navigation/HomeNavigation";
import AuthContextProvider from "./context/AuthContextProvider";
import NavRoute from "./navigation/NavRoute";

export default function App() {
  return (
    <AuthContextProvider>
      <NavRoute />
    </AuthContextProvider>
  );
}
