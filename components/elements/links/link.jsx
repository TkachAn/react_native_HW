import {StyleSheet} from "react-native";
import {Dimensions} from "react-native";
import {Link as NativeLink} from "@react-navigation/native";
// 
const widthScreen = Dimensions.get("window").width;
//
export const Link = ({to, children}) => {
  return (
    <NativeLink to={to} style={styles.link}>
      {children}
    </NativeLink>
  );
};

const styles = StyleSheet.create({
  link: {
    backgroundColor: "#fff",
    width: widthScreen,
    textAlign: "center",
  },
});
