import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <RegisterPage />
      </>
    ),
  },
  {
    path: "login",
    element: (
      <>
        <LoginPage />
      </>
    ),
  },
]);
