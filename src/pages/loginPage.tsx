import AuthLayOut from "../layouts/auth.layout";
import Login from "../components/login/login";

import React from "react";

const LoginPage = () => {
  return <AuthLayOut>{<Login />}</AuthLayOut>;
};

export default LoginPage;
