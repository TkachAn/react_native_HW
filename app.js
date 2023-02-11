import React, {useState, useCallback} from "react";
import {StatusBar} from "expo-status-bar";
import {useFonts} from "expo-font";
import {StyleSheet, Text, View} from "react-native";
import * as SplashScreen from "expo-splash-screen";
//
import Router from "./navigation/authNav";
import "./i18n";
//
console.log("APP");
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-400": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-700": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <Proider>
    <View onLayout={onLayoutRootView} style={styles.container}>
      <Router />
      <StatusBar style="auto" />
    </View>
    //</Proider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
