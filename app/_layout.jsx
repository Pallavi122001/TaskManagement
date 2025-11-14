import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/home");
      } else {
        router.replace("/login");
      }
    });

    return unsubscribe;
  }, []);

  return <Slot />;
}
