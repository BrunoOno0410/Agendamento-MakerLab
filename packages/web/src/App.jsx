import React from "react";
import { LoginPage } from "./pages/Login/Login";
import { BookingPage } from "./pages/UserScreen/UserScreen";
import { AdmHome } from "./pages/AdmHomeScreen/AdmHomeScreen";
import { PassRecovery } from "./pages/PassRecovery/PassRecovery";
import { AdmStat } from "./pages/AdmStatistic/AdmStatistic";
import { AdmNotif } from "./pages/AdmNotification/AdmNotification";

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
  {
    path: "/admin",
    element: <AdmHome/>,
  },
  {
    path: "/recovery",
    element: <PassRecovery/>,
  },
  {
    path: "/adminstat",
    element: <AdmStat/>,
  },
  {
    path: "/adminnotif",
    element: <AdmNotif/>,
  },
]);
export const App = () => {
return (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)};