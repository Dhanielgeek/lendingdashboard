import logo from "../assets/headerlogo.svg";

const Header = () => {
  return (
    <div className="w-full h-[10vh] bg-[#113B5E] flex justify-between items-center">
      <div className="w-[20%] h-full  flex justify-center items-center">
        <img src={logo} alt="" />
      </div>
      <div className="w-[30%] h-full  flex justify-end px-4 gap-2 items-center">
        <p className=" font-bold text-white  cursor-pointer">Privacy</p>
        <span className=" text-white">|</span>
        <p className=" font-bold text-white cursor-pointer ">Help</p>
      </div>
    </div>
  );
};

export default Header;
