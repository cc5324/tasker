import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "@/pages/share/error.jsx";
import LoginPage from "@/pages/login.jsx";
import Directing, { loader as TokenLoader } from "@/pages/directing.jsx";
// import Tasks from "@/pages/share/demo.jsx";
import Tasks, { loader as TasksLoader } from "@/pages/tasks.jsx";

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
        { path: "directing", element: <Directing />, loader: TokenLoader },
        { path: "tasks", element: <Tasks />, loader: TasksLoader },
      ],
    },
    {
      path: "demo",
      element: <Tasks></Tasks>,
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
