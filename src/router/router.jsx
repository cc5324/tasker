import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import Cookies from "js-cookie";

import App from "@/App";
import ErrorPage from "@/pages/share/ErrorPage.jsx";
import LoginPage, { loader as TokenLoader } from "@/pages/LoginPage.jsx";
import Tasks from "@/pages/TasksPage.jsx";
import TaskPage, { loader as TaskLoader } from "@/pages/TaskPage.jsx";
import TaskEditPage from "@/pages/TaskEditPage";
import NewTaskPage, { repoLoader } from "@/pages/NewTaskPage.jsx";

import DemoPage from "@/pages/share/demo.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Tasks />,
          loader: TokenLoader,
        },
        {
          path: "login",
          element: <LoginPage />,
          loader: () => {
            const token = Cookies.get("token");
            return token ? redirect("/") : null;
          },
        },
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
        {
          path: "/new-task",
          element: <NewTaskPage />,
          loader: repoLoader,
        },
        {
          path: "demo",
          element: <DemoPage />,
        },
      ],
    },
  ]
  // { basename: "/tasker" }
);

export default router;
export { RouterProvider };
