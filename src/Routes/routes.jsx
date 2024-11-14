import { createBrowserRouter } from "react-router-dom";

import Login from "../Auth/login";
import Register from "../Auth/register";

import WrapperAu from "../layout/WrapperAu";
import Ques from "../layout/Ques";
import Name from "../Page/Name";

import EmailPassword from "../Page/EmailPassword";
import IdAndSsn from "../Page/IdSsn";
import Address from "../Page/Address";
import BankInfo from "../Page/Info";

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
        path: "emailpass",
        element: <EmailPassword />,
      },
      {
        path: "idssn",
        element: <IdAndSsn />,
      },
      {
        path: "address",
        element: <Address />,
      },
      {
        path: "bankinfo",
        element: <BankInfo />,
      },
    ],
  },
]);
