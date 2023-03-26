import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "@/pages/share/error.jsx";
import LoginPage from "@/pages/login.jsx";
import MainPage, { loader as MainLoader } from "@/pages/tasks.jsx";
import Tasks from "@/pages/share/demo.jsx";

import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      // action: rootAction,
      children: [
        { path: "login", element: <LoginPage /> },
        { index: true, element: <MainPage />, loader: MainLoader },
        {
          path: "demo",
          element: <Tasks></Tasks>,
        },
      ],
    },
  ],
  { basename: "/tasker" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
