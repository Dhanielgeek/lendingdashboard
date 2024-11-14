// IdAndSsn.js
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoLockOpenOutline } from "react-icons/io5";
import { useNavigate, useOutletContext } from "react-router-dom";

const IdAndSsn = () => {
  const navigate = useNavigate();
  const [idType, setIdType] = useState("");
  const [ssn, setSsn] = useState("");

  const { handleNext } = useOutletContext();

  const handleNextClick = (e) => {
    e.preventDefault();
    if (!idType || !ssn) {
      alert("Please fill in both fields.");
      return;
    }
    handleNext();
    navigate("/ques/address"); // Navigate to the next step
  };

  return (
    <div className="w-full h-screen flex justify-center gap-4 flex-col items-center">
      <div className="w-[45%] h-[7%] bg-[#DDF0E4] rounded text-green-800 font-semibold flex justify-center items-center gap-2 max-md:w-[90%]">
        <IoIosArrowBack size={20} />
        <p>Securely enter your ID and SSN</p>
      </div>
      <div className="w-[45%] h-[20%]  gap-2 flex-col flex justify-center items-start max-md:w-[90%]">
        <p className="text-4xl font-bold text-blue-950">ID and SSN</p>
        <p className="text-xl text-blue-950">
          Please provide your ID type and Social Security Number for
          verification.
        </p>
      </div>
      <form
        onSubmit={handleNextClick}
        className="w-[45%] h-[50%]  flex flex-col justify-around items-center max-md:w-[90%]"
      >
        <div className="w-full h-[25%] flex-col flex justify-center gap-1 items-start">
          <label className="font-semibold text-xl text-blue-950">
            Type of ID
          </label>
          <input
            type="text"
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
            placeholder="Enter type of ID"
            className="w-full h-[70%] border-gray-400 border px-3 rounded outline-blue-950"
          />
        </div>

        <div className="w-full h-[25%] flex-col flex justify-center gap-1 items-start">
          <label className="font-semibold text-xl text-blue-950">
            Social Security Number
          </label>
          <input
            type="text"
            value={ssn}
            onChange={(e) => setSsn(e.target.value)}
            placeholder="Enter your SSN"
            className="w-full h-[70%] border-gray-400 border px-3 rounded outline-blue-950"
          />
        </div>

        <div className="w-full h-[15%] flex justify-start gap-3 px-2 items-center">
          <IoLockOpenOutline size={30} />
          <p className="text-blue-950 font-semibold">
            Your information is securely encrypted for your safety.
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

export default IdAndSsn;
