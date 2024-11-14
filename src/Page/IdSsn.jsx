import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoLockOpenOutline } from "react-icons/io5";
import { useNavigate, useOutletContext } from "react-router-dom";

const IdAndSsn = () => {
  const navigate = useNavigate();
  const [idType, setIdType] = useState("");
  const [ssn, setSsn] = useState("");
  const [idImage, setIdImage] = useState(null);

  const { handleNext } = useOutletContext();

  const handleNextClick = (e) => {
    e.preventDefault();

    if (!idType || !ssn || !idImage) {
      alert("Please fill in all fields and upload your ID image.");
      return;
    }

    handleNext();
    navigate("/ques/address");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIdImage(file);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center gap-4 flex-col items-center px-4 ">
      {/* Header */}
      <div className="w-full max-w-[450px] h-[7%] bg-[#DDF0E4] rounded text-green-800 font-semibold flex justify-center items-center gap-2">
        <IoIosArrowBack size={20} />
        <p>Securely enter your ID and SSN</p>
      </div>

      {/* Title and Description */}
      <div className="w-full max-w-[450px] h-[20%] gap-2 flex-col flex justify-center items-start">
        <p className="text-4xl font-bold text-blue-950">ID and SSN</p>
        <p className="text-xl text-blue-950">
          Please provide your ID type, Social Security Number, and upload a
          photo of your ID for verification.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleNextClick}
        className="w-full max-w-[450px] h-[70%] flex flex-col justify-around items-center"
      >
        {/* ID Type Selection */}
        <div className="w-full h-[16%] flex-col flex justify-center gap-1 items-start">
          <label className="font-semibold text-xl text-blue-950">
            Type of ID
          </label>
          <select
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
            className="w-full h-[70%] border-gray-400 border px-3 rounded outline-blue-950"
          >
            <option value="">Select an ID type</option>
            <option value="drivers_license">Drivers License</option>
            <option value="work_id">Work ID</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* ID Image Upload */}
        <div className="w-full h-[18%] flex-col flex justify-center gap-1 items-start">
          <label className="font-semibold text-xl text-blue-950">
            Upload ID Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full h-[70%] border-gray-400 py-3 border px-3 rounded outline-blue-950"
          />
          {/* {idImage && (
            <div className="w-full h-[20%] bg-pink-500 flex flex-col items-center gap-3">
              <input
                type="file"
                id="proof-of-payment"
                onChange={handleImageChange}
                className="hidden"
              />
              <label
                htmlFor="proof-of-payment"
                className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded"
              >
                {idImage.name}
              </label>
            </div>
          )} */}
        </div>

        {/* SSN Input */}
        <div className="w-full h-[16%] flex-col flex justify-center gap-1 items-start">
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

        {/* Encryption Information */}
        <div className="w-full h-[15%] flex justify-start gap-3 px-2 items-center">
          <IoLockOpenOutline size={30} />
          <p className="text-blue-950 font-semibold">
            Your information is securely encrypted for your safety.
          </p>
        </div>

        {/* Buttons */}
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
