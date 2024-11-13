import { MdAccessTime } from "react-icons/md";
import { IoLockOpenOutline } from "react-icons/io5";
import { useNavigate, useOutletContext } from "react-router-dom";

const Name = () => {
  const navigate = useNavigate();
  const { handleNext } = useOutletContext();

  const handleNextClick = () => {
    handleNext(); // Update progress
    navigate("/ques/email"); // Navigate to the next step
  };

  return (
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <div className="w-[45%] h-[7%] bg-[#DDF0E4] rounded text-green-800 font-semibold flex justify-center items-center gap-2 ">
        <MdAccessTime size={20} />
        <p>Check your rate in seconds!</p>
      </div>
      <div className="w-[45%] h-[18%]  gap-2 flex-col flex justify-center items-start">
        <p className=" text-4xl font-bold text-blue-950">What’s your name?</p>
        <p className=" text-xl text-blue-950">
          This helps us verify your identity and create your customized offer.
        </p>
      </div>
      <form
        action=""
        className="w-[45%] h-[70%]  flex flex-col justify-around items-center"
      >
        <div className="w-full h-[20%] flex-col flex justify-center gap-1  items-start">
          <label htmlFor="" className=" font-semibold text-xl text-blue-950">
            First Name
          </label>
          <input
            type="text"
            className="w-full h-[70%] border-gray-400 border px-3 rounded outline-blue-950 "
          />
        </div>
        <div className="w-full h-[20%] flex-col flex justify-center gap-1  items-start">
          <label htmlFor="" className=" font-semibold text-xl text-blue-950">
            Last Name
          </label>
          <input
            type="text"
            className="w-full h-[70%] border-gray-400 border px-3 rounded outline-blue-950 "
          />
        </div>
        <div className="w-full h-[15%] flex justify-start gap-3 px-2 items-center">
          <IoLockOpenOutline size={30} />
          <p className=" text-gray-400">
            We know that your information is personal, so we use bank-level
            encryption at all times.
          </p>
        </div>
        <div className="w-full h-[17%] flex justify-center items-center">
          <button
            className=" py-2 text-white font-semibold text-xl px-24 bg-blue-600 hover:bg-blue-900"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Name;
