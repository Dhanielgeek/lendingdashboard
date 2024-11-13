import { createBrowserRouter } from "react-router-dom";

import Login from "../Auth/login";
import Register from "../Auth/register";

import WrapperAu from "../layout/WrapperAu";
import Ques from "../layout/Ques";
import Name from "../Page/Name";
import Email from "../Page/Email";

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
  {
    path: "ques",
    element: <Ques />,
    children: [
      {
        path: "",
        element: <Name />,
      },
      {
        path: "email",
        element: <Email />,
      },
    ],
  },
]);
