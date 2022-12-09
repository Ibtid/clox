import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../context/AuthContextProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    login(username, password);
  }

  function handleRegister() {
    navigation.navigate("Register");
  }

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          alignSelf: "center",
          marginVertical: 25,
        }}
      >
        Welcome to navigation
      </Text>
      <Text>Username</Text>
      <TextInput
        style={{
          borderWidth: 1,
          width: 200,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
        placeholder="Email"
        onChangeText={(value) => {
          setUsername(value);
        }}
      />
      <Text>Password</Text>
      <TextInput
        style={{
          borderWidth: 1,
          width: 200,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
        placeholder="Password"
        secureTextEntry
        onChangeText={(value) => {
          setPassword(value);
        }}
      />
      <View style={{ marginBottom: 20 }}>
        <Button title="Login" onPress={handleLogin} />
      </View>

      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};

export default LoginScreen;
