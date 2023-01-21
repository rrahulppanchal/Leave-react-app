import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MyLeave from "./pages/my-leave/MyLeave";
import RequestLeave from "./pages/request-leave/RequestLeave";
import ApproveLeave from "./pages/leave-approval/ApproveLeave";
import LoginRequest from "./pages/login-request/LoginRequest";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <MyLeave />,
  },
  {
    path: "/my-leaves/:id",
    element: <MyLeave />,
  },
  {
    path: "/request-leave",
    element: <RequestLeave />,
  },
  {
    path: "/approve-leaves",
    element: <ApproveLeave />,
  },
  {
    path: "/login-requests",
    element: <LoginRequest />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
