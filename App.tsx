import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Router from "./src/router/Router";

export default function App() {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
