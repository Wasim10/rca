import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";

import { SafeAreaView as RNSaveAreaView } from "react-native-safe-area-context";
 

const SafeAreaView = styled(RNSaveAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 backgroud p-5">
      <Text className="text-5xl font-sans-extrabold "> Home </Text>
      

      <Link href="/onboarding" className="mt-4 font-sans-bold  rounded bg-primary p-4  text-white" >Go to onboarding...
      </Link>
         <Link href="/(auth)/signIn" className="mt-4 font-sans-bold rounded bg-primary p-4  text-white" >Go to signIn...
      </Link>
          <Link href="/(auth)/signUp" className="mt-4 font-sans-bold rounded bg-primary p-4  text-white" >Go to signUp...
      </Link>
        

    </SafeAreaView>
  );
}