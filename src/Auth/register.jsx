/* eslint-disable react/prop-types */
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import InputField from "../components/Inputfiled/index";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    email: "",
    password: "",
    accountType: "personal",
    ssn: "",
    emailCode: "",
    identificationMethod: "driver_license",
    paymentMethod: "credit_card",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => prevStep - 1);
  const handleSubmit = () => console.log(formData);

  const steps = [
    "Personal Information",
    "Verification",
    "Identification",
    "Payment",
  ];

  // eslint-disable-next-line react/prop-types
  const SelectField = ({ label, options, ...props }) => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-200 mb-2">
        {label}
      </label>
      <select
        className="w-full px-4 py-2 bg-[#0F1011] border border-[#FFC7274D] rounded-lg 
                   focus:ring-2 focus:ring-[#FFC727] focus:border-transparent
                   text-white"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0F1011] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[#1A1B1E] p-8 rounded-xl shadow-2xl">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((stepLabel, index) => (
              <div key={stepLabel} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center
                              ${
                                step > index + 1
                                  ? "bg-[#FFC727]"
                                  : step === index + 1
                                  ? "bg-[#FFC727]"
                                  : "bg-gray-600"
                              }`}
                >
                  {step > index + 1 ? (
                    <Check className="w-5 h-5 text-black" />
                  ) : (
                    <span
                      className={`text-sm ${
                        step === index + 1 ? "text-black" : "text-white"
                      }`}
                    >
                      {index + 1}
                    </span>
                  )}
                </div>
                <span className="text-xs mt-1 text-gray-400">{stepLabel}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">
              Personal Information
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200 mb-2">
                First Name
              </label>
              <InputField
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(value) => handleInputChange("firstName", value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Last Name
              </label>
              <InputField
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(value) => handleInputChange("lastName", value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <InputField
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(value) => handleInputChange("email", value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Password
              </label>
              <InputField
                type="password"
                placeholder="Create password"
                value={formData.password}
                onChange={(value) => handleInputChange("password", value)}
                required
              />
            </div>
            <SelectField
              label="Account Type"
              value={formData.accountType}
              onChange={(e) => handleInputChange("accountType", e.target.value)}
              options={[
                { value: "personal", label: "Personal Account" },
                { value: "business", label: "Business Account" },
              ]}
            />
          </div>
        )}

        {/* Step 2: SSN and Email Verification */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Verification</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Social Security Number
              </label>
              <InputField
                type="text"
                placeholder="Enter your SSN"
                value={formData.ssn}
                onChange={(value) => handleInputChange("ssn", value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email Verification Code
              </label>
              <InputField
                type="text"
                placeholder="Enter verification code"
                value={formData.emailCode}
                onChange={(value) => handleInputChange("emailCode", value)}
                required
              />
            </div>
          </div>
        )}

        {/* Step 3: Identification Method */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">
              Identification
            </h2>
            <SelectField
              label="Select Identification Method"
              value={formData.identificationMethod}
              onChange={(e) =>
                handleInputChange("identificationMethod", e.target.value)
              }
              options={[
                { value: "driver_license", label: "Driver's License" },
                { value: "id_card", label: "ID Card" },
                { value: "passport", label: "Passport" },
              ]}
            />
          </div>
        )}

        {/* Step 4: Payment Verification */}
        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">
              Payment Method
            </h2>
            <SelectField
              label="Select Payment Method"
              value={formData.paymentMethod}
              onChange={(e) =>
                handleInputChange("paymentMethod", e.target.value)
              }
              options={[
                { value: "credit_card", label: "Credit Card" },
                { value: "debit_card", label: "Debit Card" },
                { value: "checking_account", label: "Checking Account" },
              ]}
            />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg
                       hover:bg-gray-600 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </button>
          )}
          <div className="flex-1" />
          {step < 4 ? (
            <button
              onClick={handleNext}
              className="flex items-center px-4 py-2 bg-[#FFC727] text-black font-medium rounded-lg
                       hover:bg-[#FFD247] transition-colors duration-200"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center px-4 py-2 bg-[#FFC727] text-black font-medium rounded-lg
                       hover:bg-[#FFD247] transition-colors duration-200"
            >
              Submit
              <Check className="w-5 h-5 ml-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
