import { createBrowserRouter } from "react-router-dom";

import Login from "../Auth/login";
import Register from "../Auth/register";

import WrapperAu from "../layout/WrapperAu";

export const Routes = createBrowserRouter([
  {
    path: "auth",
    element: <WrapperAu />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
