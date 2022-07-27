import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from "./Navigation/TabNavigator";

const MyTheme = {
  colors: {
      card: "#F49336",
  }
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}