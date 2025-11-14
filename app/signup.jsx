import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";

let dummyUser = null; // temporary user store

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!email || !password) {
      return Alert.alert("Error", "Email and password required");
    }

    dummyUser = { email, password };

    Alert.alert("Success", "Account created!", [
      { text: "OK", onPress: () => router.replace("/login") },
    ]);
  };

  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Create Account</Text>

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
        onPress={handleSignup}
        style={{ backgroundColor: "black", padding: 15 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={{ marginTop: 15 }}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export { dummyUser };
