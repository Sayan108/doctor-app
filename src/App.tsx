import React from "react";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes.constants";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./components/homepage/homepage";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import Header from "./components/shared/header";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "./redux/silces";
function App() {
  const showHeader = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <div className="App">
      {showHeader ? <Header /> : null}
      <Routes>
        <Route
          index
          path={routes.ROOT}
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path={routes.DASHBOARD}
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.REGISTRATION} element={<RegistrationPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
