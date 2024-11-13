import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Ques = () => {
  return (
    <div className="w-full h-screen bg-red-400 ">
      <Header />
      <Outlet />
    </div>
  );
};

export default Ques;
