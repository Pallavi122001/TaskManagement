import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { router } from "expo-router";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const save = () => {
    router.push({
      pathname: "/home",
      params: {
        new: "1",
        title,
        description,
        refresh: Date.now().toString(),
      },
    });
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: "#F8F9FB",
      }}
    >
      <Text
        style={{
          fontSize: 26,
          fontWeight: "700",
          marginBottom: 20,
          color: "#222",
        }}
      >
        Add New Task
      </Text>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 14,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <TextInput
          placeholder="Task Title"
          value={title}
          onChangeText={setTitle}
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 10,
            padding: 12,
            marginBottom: 15,
            fontSize: 16,
            color: "#222",
          }}
        />

        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 10,
            padding: 12,
            marginBottom: 15,
            fontSize: 16,
            color: "#222",
          }}
          multiline
        />
      </View>
      <TouchableOpacity
        onPress={save}
        style={{
          backgroundColor: "#000",
          paddingVertical: 15,
          borderRadius: 12,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          Save Task
        </Text>
      </TouchableOpacity>
    </View>
  );
}
