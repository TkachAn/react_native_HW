import React from "react";
import {Dimensions} from "react-native";
import {View, Text, StyleSheet} from "react-native";
//
import {BackScreen} from "../../components/back";
import Avatar from "../../components/avarar";
//
const widthScreen = Dimensions.get("window").width;
console.log("Profile");
//

export default function ProfileScreen() {
  return (
    <BackScreen>
      <View style={styles.container}>
        <Avatar />
        <View style={styles.text}>
          <Text>Profile</Text>
        </View>
      </View>
    </BackScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    //
  },
  text: {
    width: widthScreen,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
