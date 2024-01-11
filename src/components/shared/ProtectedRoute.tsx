import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../../redux/silces";
import { Props } from "../../layouts/auth.layout";
import { routes } from "../../routes.constants";
const ProtectedRoute: any = (props: Props) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to={routes.LOGIN} state={{ from: location }} replace />;
  }
  return props.children;
};

export default ProtectedRoute;
