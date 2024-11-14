// Address.js
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoLockOpenOutline } from "react-icons/io5";
import { useNavigate, useOutletContext } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const { handleNext } = useOutletContext();

  const handleNextClick = (e) => {
    e.preventDefault();
    if (!address) {
      alert("Please enter your address.");
      return;
    }
    handleNext();
    navigate("/ques/bankinfo"); // Navigate to the next step
  };

  return (
    <div className="w-full h-screen flex justify-center gap-4 flex-col items-center">
      <div className="w-[45%] h-[7%] bg-[#DDF0E4] rounded text-green-800 font-semibold flex justify-center items-center gap-2 max-md:w-[85%]">
        <IoIosArrowBack size={20} />
        <p>Enter your address securely</p>
      </div>
      <div className="w-[45%] h-[18%] gap-2 flex-col flex justify-center items-start max-md:w-[85%]">
        <p className="text-4xl font-bold text-blue-950">Current Address</p>
        <p className="text-xl text-blue-950">
          This information helps us verify your identity and provide
          personalized services.
        </p>
      </div>
      <form
        onSubmit={handleNextClick}
        className="w-[45%] h-[40%]  flex flex-col justify-around items-center max-md:w-[85%]"
      >
        <div className="w-full h-[40%] flex-col flex justify-center gap-1 items-start">
          <label className="font-semibold text-xl text-blue-950">
            Enter Your Current Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full h-[50%] border-gray-400 border px-3 rounded outline-blue-950"
          />
        </div>

        <div className="w-full h-[15%] flex justify-start gap-3 px-2 items-center">
          <IoLockOpenOutline size={30} />
          <p className="text-gray-400">
            Your address will be stored securely with bank-level encryption.
          </p>
        </div>

        <div className="w-full h-[17%] flex justify-center gap-2 items-center">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="py-2 px-6 text-blue-600 font-semibold text-xl bg-white shadow-lg rounded hover:bg-blue-50"
          >
            <IoIosArrowBack size={20} className="inline-block mr-1" />
          </button>
          <button
            type="submit"
            className="py-2 text-white font-semibold text-xl px-24 bg-blue-600 hover:bg-blue-900 rounded"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
