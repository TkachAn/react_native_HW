import React from "react";
//
import {useTranslation} from "react-i18next";
import {Link} from "../../components/elements/links/link";
//
import {BackScreen} from "../../components/back";
import Avatar from "../../components/avarar";
import Form from "../../components/form";
//
console.log("SignUp");
//

export default function SignUp() {
  const {t} = useTranslation();
  //
  return (
    <BackScreen>
      <Avatar />
      <Form title={t("SignUp")} />
      <Link to={{screen: "SignIn"}}>{t("or_in")}</Link>
    </BackScreen>
  );
}

// const styles = StyleSheet.create({
//   // container: {
//   //   width: "100%",
//   //   backgroundColor: "#fff",
//   // },
//   // link__text: {
//   //   textAlign: "center",
//   //   color: "#1B4371",
//   //   fontFamily: "Roboto-400",
//   //   fontSize: 16,
//   //   lineHeight: 19,
//   // },
// });
