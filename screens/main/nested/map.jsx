import React from "react";
import {View, Text, StyleSheet} from "react-native";
//
console.log("Map");
//

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
