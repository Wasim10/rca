import { styled } from "nativewind";
import React from 'react';
import { Text } from 'react-native';

import { SafeAreaView as RNSaveAreaView } from "react-native-safe-area-context";
 

const SafeAreaView = styled(RNSaveAreaView);

const subscripions = () => {
  return (
    <SafeAreaView className="flex-1 bg-backgroud p-5">
      <Text>subscripions</Text>
    </SafeAreaView>
  )
}

export default subscripions