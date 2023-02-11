import React from "react";
import {View, Text, StyleSheet} from "react-native";
//
console.log("Create");
//

export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <Text>Create</Text>
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
