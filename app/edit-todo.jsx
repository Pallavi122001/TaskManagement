import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function EditTodo() {
  const item = useLocalSearchParams();
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const update = () => {
    router.push({
      pathname: "/home",
      params: {
        edit: "1",
        id: item.id,
        title,
        description,
        refresh: Date.now().toString(),
      },
    });
  };

  const remove = () => {
    router.push({
      pathname: "/home",
      params: {
        delete: "1",
        id: item.id,
        refresh: Date.now().toString(),
      },
    });
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 12,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 6,
          elevation: 4,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            marginBottom: 15,
            textAlign: "center",
          }}
        >
          Edit Task
        </Text>

        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 12,
            borderRadius: 8,
            marginBottom: 10,
            backgroundColor: "#fafafa",
          }}
        />

        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 12,
            borderRadius: 8,
            marginBottom: 20,
            backgroundColor: "#fafafa",
          }}
        />
        <TouchableOpacity
          onPress={update}
          style={{
            backgroundColor: "#000",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}
          >
            Update Task
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={remove}
          style={{
            backgroundColor: "#ff3b30",
            padding: 15,
            borderRadius: 10,
            marginTop: 12,
          }}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}
          >
            Delete Task
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
