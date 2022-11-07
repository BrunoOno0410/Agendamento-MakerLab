import React from "react";
import { LoginPage } from "./pages/Login/Login";
import { BookingPage } from "./pages/UserScreen/UserScreen";
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
  {
    path: "/reserva",
    element: <BookingPage/>,
  },
]);
export const App = () => {
return (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)};