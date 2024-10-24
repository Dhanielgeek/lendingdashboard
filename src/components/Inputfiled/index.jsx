/* eslint-disable react/prop-types */
import { Textbox } from "react-inputs-validation";
import "./style.css";

/**
 *
 * @param {object} props
 * @param {string} props.placeholder
 * @param {"text" | "password" | "email"} props.type
 * @param {boolean} props.required
 * @param {boolean} props.check
 * @param {string} props.value
 * @param {Function} props.onChange
 * @returns
 */
const InputField = ({
  placeholder = "Enter text.",
  type = "text",
  required = false,
  check = true,
  onChange,
  value,
}) => {
  // Validation rules based on input type
  const validate =
    type === "password"
      ? {
          reg: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          regMsg:
            "Password must be 8+ characters with 1 uppercase, 1 number, and 1 special character.",
        }
      : type === "email"
      ? {
          reg: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          regMsg: "Please enter a valid email address.",
        }
      : {};

  return (
    <Textbox
      value={value}
      classNameInput="w-full transform duration-60 h-[46px] px-[12px] bg-[#0F1011] rounded border border-solid border-[#FFC7274D] placeholder:text-[#595A5C] text-[14px] outline-none"
      attributesInput={{
        type,
        placeholder,
      }}
      onChange={(value) => {
        onChange && onChange(value);
      }}
      onBlur={() => {}}
      validationOption={{
        ...validate,
        required: required ? "This field is required." : false,
        check,
        customFunc: (value) => {
          if (required && !value) {
            return "This field is required.";
          }
          return true; // Validation passed
        },
      }}
    />
  );
};

export default InputField;