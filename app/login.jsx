import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";
import { dummyUser } from "./signup";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!dummyUser) {
      return Alert.alert("Error", "No user found. Please signup first.");
    }

    if (dummyUser.email === email && dummyUser.password === password) {
      router.replace("/home");
    } else {
      Alert.alert("Login Error", "Invalid email or password");
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{ backgroundColor: "black", padding: 15 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={{ marginTop: 15 }}>Don’t have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
