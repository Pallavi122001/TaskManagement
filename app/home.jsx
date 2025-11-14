import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { saveTodos, loadTodos } from "../components/storage";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const params = useLocalSearchParams();

  useEffect(() => {
    (async () => {
      const stored = await loadTodos();
      setTodos(stored);
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (!loaded) return;

    if (params?.new === "1") {
      const newTodo = {
        id: Date.now().toString(),
        title: params.title,
        description: params.description,
      };
      const updated = [...todos, newTodo];
      setTodos(updated);
      saveTodos(updated);
    }

    if (params?.edit === "1") {
      const updated = todos.map((t) =>
        t.id === params.id
          ? { ...t, title: params.title, description: params.description }
          : t
      );
      setTodos(updated);
      saveTodos(updated);
    }

    if (params?.delete === "1") {
      const updated = todos.filter((t) => t.id !== params.id);
      setTodos(updated);
      saveTodos(updated);
    }
  }, [params.refresh, loaded]);

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F9FB", paddingTop: 60 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
          paddingHorizontal: 20,
          marginBottom: 10,
          color: "#222",
        }}
      >
        Your Tasks
      </Text>
      {todos.length === 0 && (
        <Text
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: 16,
            color: "#666",
          }}
        >
          No tasks yet. Tap + to add one!
        </Text>
      )}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push({ pathname: "/edit-todo", params: item })}
            style={{
              padding: 15,
              backgroundColor: "#fff",
              marginVertical: 8,
              borderRadius: 14,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 17,
                color: "#222",
                marginBottom: 4,
              }}
            >
              {item.title}
            </Text>
            <Text style={{ color: "#555", fontSize: 14 }}>
              {item.description}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        onPress={() => router.push("/add-todo")}
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          backgroundColor: "#000",
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 6,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 32, color: "#fff", marginTop: -2 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
