import React from "react";
//
import {useTranslation} from "react-i18next";
import {Link} from "../../components/elements/links/link";
//
import {BackScreen} from "../../components/back";
import Form from "../../components/form";
//
console.log("SignIn");
//
export default function SignIn() {
  const {t} = useTranslation();
  //
  return (
    <BackScreen>
      <Form title={t("SignIn")} isLogin={false} />
      <Link to={{screen: "SignUp"}}>{t("or_up")}</Link>
    </BackScreen>
  );
}
