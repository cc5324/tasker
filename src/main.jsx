import React from "react";
import ReactDOM from "react-dom/client";

import router, { RouterProvider } from "@/router/router.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
