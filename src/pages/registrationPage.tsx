import AuthLayOut from "../layouts/auth.layout";
import Registration from "../components/registration/registration";
import React from "react";

const RegistrationPage = () => {
  return <AuthLayOut>{<Registration />}</AuthLayOut>;
};

export default RegistrationPage;
