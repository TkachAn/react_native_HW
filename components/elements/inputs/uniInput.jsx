import {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
//
import {useTranslation} from "react-i18next";
//
export default function Input({
  value,
  onChangeText,
  placeholder,
  isPass = false,
}) {
  const [focus, setFocus] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {t} = useTranslation();
  const show = () => {
    setIsShowPassword(!isShowPassword);
  };
  const secure = isShowPassword ? false : true;
  console.log("isShowPassword: ", isShowPassword);
  return (
    <View style={styles.inputBox}>
      <TextInput
        keyboardType={isPass ? "default" : "email-address"}
        placeholder={isPass ? t("Pass") : placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value.trim()}
        onChangeText={onChangeText}
        secureTextEntry={secure}
        style={[styles.input, focus && styles.focused]}
      />
      {isPass && (
        <TouchableOpacity style={styles.input_btn} onPress={show}>
          <Text style={styles.input__text}>
            {isShowPassword ? t("Hide") : t("Show")}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  inputBox: {
    marginBottom: 15,
    paddingRight: 18,
    paddingLeft: 18,
  },
  input: {
    paddingRight: 18,
    paddingLeft: 18,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: "#F6F6F6",
    height: 50,
    shadowOpacity: 0.5,
    shadowOffset: {width: 3, height: 5},
    shadowRadius: 8,
    elevation: 6,
  },
  focused: {
    borderColor: "#ff6c00",
    backgroundColor: "#fff",
    shadowRadius: 0,
    elevation: 0,
  },
  input_btn: {
    position: "absolute",

    top: 11,
    right: 30,
  },
  input__text: {
    fontSize: 14,
    color: "#a1a1a1",
  },
});
