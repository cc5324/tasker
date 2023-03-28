import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "@/pages/share/error.jsx";
import LoginPage from "@/pages/login.jsx";
import Directing, { loader as TokenLoader } from "@/pages/directing.jsx";
import Tasks from "@/pages/TasksPage.jsx";
import TaskPage, { loader as TaskLoader } from "@/pages/TaskPage.jsx";

import DemoPage from "@/pages/share/demo.jsx";

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
        { path: "tasks", element: <Tasks /> },
        {
          path: "task/:taskId",
          element: <TaskPage />,
          loader: TaskLoader,
        },
      ],
    },
    {
      path: "demo",
      element: <DemoPage />,
    },
  ],
  { basename: "/tasker" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
