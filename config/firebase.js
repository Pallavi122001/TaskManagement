import { initializeApp, getApps } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBK_cHAfJ6i6IYJn9n_qfbJXK1G4p11uRY",
  authDomain: "todo-auth-app-de635.firebaseapp.com",
  projectId: "todo-auth-app-de635",
  storageBucket: "todo-auth-app-de635.firebasestorage.app",
  messagingSenderId: "497629993636",
  appId: "1:497629993636:web:7a3dce0b8d73daf38c2431",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };
