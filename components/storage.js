import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTodos = async (todos) => {
  try {
    await AsyncStorage.setItem("TODOS", JSON.stringify(todos));
  } catch (e) {
    console.log("Save error:", e);
  }
};

export const loadTodos = async () => {
  try {
    const data = await AsyncStorage.getItem("TODOS");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};
