import React from "react";
import {View, Text, StyleSheet} from "react-native";
//
console.log("Comments");
//

export default function CommentsScreen() {
  return (
    <View style={styles.container}>
      <Text>Comments</Text>
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
