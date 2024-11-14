import { MdOutlineMenu } from "react-icons/md";
import logo from "../assets/headerlogo.svg";
import { useState } from "react";

const Header = () => {
  const [Toggle, setToggle] = useState(false);

  const HandleToggle = () => {
    setToggle(!Toggle);
  };

  return (
    <div className="w-full h-[10vh] bg-[#113B5E] flex justify-between items-center">
      {/* Logo Section */}
      <div className="w-[20%] h-full flex justify-center items-center px-3  max-md:w-[40%]">
        <img src={logo} alt="Logo" className="h-auto" />
      </div>

      {/* Desktop Links */}
      <div className="w-[30%] h-full flex justify-end px-4 gap-2 items-center max-md:hidden">
        <p className="font-bold text-white cursor-pointer">Privacy</p>
        <span className="text-white">|</span>
        <p className="font-bold text-white cursor-pointer">Help</p>
      </div>

      {/* Mobile Menu */}
      <div className="w-[30%] h-full  flex justify-center items-center max-md:w-[40%]">
        <MdOutlineMenu
          className="text-white cursor-pointer"
          size={26}
          onClick={HandleToggle}
        />
      </div>

      {/* Mobile Menu Dropdown */}
      {Toggle && (
        <div className="fixed top-[4rem]  left-0 w-full h-full  bg-opacity-50 z-30">
          <div className="w-[60%] h-[20%] bg-white flex flex-col items-center justify-center absolute right-0 p-4">
            <p className="font-bold text-xl text-[#113B5E] cursor-pointer py-2">
              Privacy
            </p>
            <p className="font-bold text-xl text-[#113B5E] cursor-pointer py-2">
              Help
            </p>
            <div
              className="text-red-400 cursor-pointer absolute top-4 right-4"
              onClick={HandleToggle}
            >
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
