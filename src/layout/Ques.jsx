import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Ques = () => {
  const [progress, setProgress] = useState(10);

  // Function to increase progress based on step
  const handleNext = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100)); // Increase progress by 45% for this example
  };

  return (
    <div className="w-full h-screen">
      <Header />
      <div className="w-full h-[9vh] bg-gray-50 flex justify-center items-center">
        <div className="w-[85%] h-[20%] bg-blue-200 rounded">
          <div
            className="h-full bg-blue-800 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      {/* Pass handleNext to children to allow progress control */}
      <Outlet context={{ handleNext }} />
    </div>
  );
};

export default Ques;
