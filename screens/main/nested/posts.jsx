import React from "react";
import {View, Text, StyleSheet} from "react-native";
//
console.log("Posts");
//

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text>Posts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
