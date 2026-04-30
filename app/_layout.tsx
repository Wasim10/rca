import "@/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="subscriptions/[id]" options={{ headerShown: true, title: "Subscription Detail" }} />
    </Stack>
  );
}