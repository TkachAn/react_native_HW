import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
//
console.log("BackScreen");
//
const Image_Background = require("../assets/background.jpg");
//
export const BackScreen = ({children}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={Image_Background}
        style={styles.image}
      />
      {children}

      <View style={styles.indicator__box}>
        <View style={styles.indicator}></View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    // fontFamily: "Roboto",
    // color: "#212121",
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  indicator__box: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  indicator: {
    marginTop: 36,
    width: 134,
    height: 5,
    backgroundColor: "#212121",
    marginBottom: 7,
  },
});
