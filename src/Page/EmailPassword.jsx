import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useOutletContext } from "react-router-dom";

const EmailPassword = () => {
  const navigate = useNavigate();
  const { handleNext } = useOutletContext(); // Access handleNext from context

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleNextClick = (e) => {
    e.preventDefault();
    if (!email || !password || !isChecked) {
      //   toast.error("Please fill all fields and agree to the terms.");
      alert("Please fill all fields and agree to the terms.");
      return;
    }

    // Optionally, add additional validation here

    handleNext(); // Update progress in Ques component
    navigate("/ques/idssn"); // Replace with your actual next step route
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="w-full h-screen flex justify-around flex-col items-center">
      <div className="w-[45%] h-[18%] gap-2 flex-col flex justify-center items-start mt-4 max-md:w-[90%]">
        <p className="text-4xl font-bold text-blue-950">
          What’s your email and password?
        </p>
        <p className="text-xl text-blue-950">
          You’ll use this to receive details about your loan and create your
          account.
        </p>
      </div>
      <form
        className="w-[45%] h-[70%] flex flex-col justify-around items-center max-md:w-[90%]"
        onSubmit={handleNextClick}
      >
        <div className="w-full h-[20%] flex-col flex justify-center gap-1 items-start">
          <label
            htmlFor="email"
            className="font-semibold text-xl text-blue-950"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[70%] border-gray-400 border px-3 rounded outline-blue-950"
          />
        </div>

        <div className="w-full h-[20%] flex-col flex justify-center gap-1 items-start">
          <label
            htmlFor="password"
            className="font-semibold text-xl text-blue-950"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your email Pasword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[70%] border-gray-400 border px-3 rounded outline-blue-950"
          />
        </div>

        <div className="w-full h-[26%] flex  items-start gap-3 px-2 max-md:h-[35%]">
          <input
            type="checkbox"
            id="agreement"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="w-6 h-6 text-blue-600 border-gray-400 rounded focus:ring focus:ring-blue-500"
          />
          <label htmlFor="agreement" className=" text-lg text-blue-950 ">
            By checking this box, I represent and acknowledge that I have
            clicked on, read and agree to the{" "}
            <a href="#" className="text-blue-600 font-semibold  underline-none">
              ESIGN Act Consent
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 font-semibold  underline-none">
              Terms Of Use
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 font-semibold  underline-none">
              Application Terms and Conditions
            </a>
            ,{" "}
            <a href="#" className="text-blue-600  font-semibold underline-none">
              Privacy Policy
            </a>
            , and{" "}
            <a href="#" className="text-blue-600 font-semibold underline-none">
              Credit Profile Authorization
            </a>
            .
          </label>
        </div>
        <div className="w-full h-[17%] flex gap-1 justify-center items-center">
          <div className="w-[10%] h-[60%] bg-white shadow-md rounded-md flex hover:bg-gray-300 cursor-pointer justify-center items-center">
            <IoIosArrowBack
              size={25}
              className="text-blue-600"
              onClick={handleBackClick}
            />
          </div>
          <button
            type="button"
            onClick={handleNextClick}
            disabled={!email || !isChecked}
            className="py-2 text-white font-semibold text-xl px-24 bg-blue-600 hover:bg-blue-900 disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailPassword;
