import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
//
import {useTranslation} from "react-i18next";
//
import Input from "./elements/inputs/uniInput";
const initialStateUp = {
  login: "",
  email: "",
  password: "",
};
const initialStateIn = {
  email: "",
  password: "",
};
console.log("form");
export default function Form({
  title,
  handleClick,
  isLogin = true,
  isEmail = true,
}) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = isLogin
    ? useState(initialStateUp)
    : useState(initialStateIn);
  //
  const {t} = useTranslation();
  //
  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    if (!isLogin) {
      setState(initialStateIn);
    } else {
      setState(initialStateUp);
    }
    console.log("handleSubmit", state);
    // handleClick(state);
  };
  //
  return (
    <View style={styles.form}>
      <View
        style={{
          ...styles.titlePosition,
          marginTop: isShowKeyboard ? 10 : 30,
          marginBottom: isShowKeyboard ? 10 : 30,
        }}
      >
        <Text style={styles.title}>{title}</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View>
          {isLogin && (
            <Input
              value={state.login}
              placeholder={t("Login")}
              onChangeText={(value) =>
                setState((prevState) => ({...prevState, login: value}))
              }
            />
          )}
          {isEmail && (
            <Input
              value={state.email}
              placeholder={t("Email")}
              onChangeText={(value) =>
                setState((prevState) => ({...prevState, email: value}))
              }
            />
          )}
          <Input
            isPass={true}
            value={state.password}
            placeholder={t("Pass")}
            onChangeText={(value) =>
              setState((prevState) => ({...prevState, password: value}))
            }
          />
        </View>
        <View>
          <TouchableOpacity
            style={{...styles.btn, marginTop: isShowKeyboard ? 0 : 20}}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.btnTitle}> {t("Send")} </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#fff",
    width: "100%",
  },
  titlePosition: {
    marginTop: 30,
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontFamily: "Roboto-500",
    fontSize: 30,
    fontWeight: "500",
  },
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
    // shadowOffset: {width: 3, height: 5},
    shadowRadius: 8,
    elevation: 6,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 25, //8, //25,
    marginTop: 20,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnTitle: {
    fontFamily: "Roboto-500",
    color: "#fff",
    fontSize: 18,
  },
  indicator: {
    marginTop: 36,
    width: 134,
    height: 5,
    backgroundColor: "#212121",
    marginBottom: 7,
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
  link__text: {
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-400",
    fontSize: 16,
    lineHeight: 19,
  },
});
//
{
  /* <View style={styles.inputBox}>
              <TextInput
                keyboardType="email-address"
                style={styles.input}
                placeholder={t("Login")}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.login}
                onChangeText={(value) =>
                  setState((prevState) => ({...prevState, login: value}))
                }
              />
            </View> */
}
{
  /* <Input
            isPass={true}
            value={state.password}
            placeholder={t("Email")}
            onChangeText={(value) =>
              setState((prevState) => ({...prevState, password: value}))
            }
          /> */
}
{
  /* <View style={styles.inputBox}>
              <TextInput
                keyboardType="email-address"
                style={styles.input}
                placeholder={t("Email")}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({...prevState, email: value}))
                }
              />
            </View> */
}
{
  /* <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              keyboardType="default"
              placeholder={t("Pass")}
              onFocus={() => setIsShowKeyboard(true)}
              secureTextEntry={isShowPassword}
              value={state.password}
              onChangeText={(value) =>
                setState((prevState) => ({...prevState, password: value}))
              }
            />
            <TouchableOpacity style={styles.input_btn} onPress={showPassword}>
              <Text style={styles.input__text}>
                {isShowPassword ? t("Show") : t("Hide")}
              </Text>
            </TouchableOpacity>
          </View> */
}
