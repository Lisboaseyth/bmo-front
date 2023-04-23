import React from "react";
import { FormLogin } from "../../Components/Forms/FormLogin";
import { DivAlignLogin } from "./style";
export const LoginPage = () => {


  return (
    <DivAlignLogin>
      <span className="spanTitle">Área do Dev - <strong> Login</strong></span>
      <FormLogin />
    </DivAlignLogin>
  );
};
