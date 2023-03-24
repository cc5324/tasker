import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthButton from "@/AuthButton.jsx";

import "./index.css";

import ErrorPage from "@/layout/share/error-page";
import LoginPage from "@/layout/login-page.jsx";
import MainPage from "@/layout/main-page.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      // loader: rootLoader,
      // action: rootAction,
      children: [
        { path: "login", element: <LoginPage /> },
        { index: true, element: <MainPage /> },
      ],
    },
    // {
    //   path: "/tasker",
    //   element: <h1>In takser route.</h1>,
    // },
  ],
  { basename: "/tasker" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
