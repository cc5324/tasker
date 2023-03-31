import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/pages/share/error.jsx";
import LoginPage from "@/pages/login.jsx";
import Directing, { loader as TokenLoader } from "@/pages/directing.jsx";
import Tasks from "@/pages/TasksPage.jsx";
import TaskPage, { loader as TaskLoader } from "@/pages/TaskPage.jsx";
import TaskEditPage from "@/pages/TaskEditPage";

import DemoPage from "@/pages/share/demo.jsx";

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
        {
          name: "EditTask",
          path: "task/:taskId/edit",
          element: <TaskEditPage />,
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

export default router;
export { RouterProvider };
