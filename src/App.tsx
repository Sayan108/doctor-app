import React from 'react';
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes.constants";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path={routes.ROOT} element={<LoginPage />} />
        {/* <Route path={routes.DASHBOARD} element={<Homepage />} /> */}
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.REGISTRATION} element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
