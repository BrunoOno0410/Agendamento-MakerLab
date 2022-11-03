import React from "react";
import { LoginPage } from "./pages/Login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },
]);
export const App = () => {
return (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)};