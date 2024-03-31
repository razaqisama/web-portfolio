import { ChangeEvent, HTMLInputTypeAttribute, forwardRef } from "react";

interface InputProps {
  name: string;
  value: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      value,
      onChange,
      placeholder,
      errorMessage,
      className,
      type = "text",
    },
    ref,
  ) => {
    return (
      <div className={`flex flex-col ${className}`}>
        <div
          className={`border-b py-2 ${
            errorMessage ? "border-red-500" : "border-brand-primary"
          }`}
        >
          <input
            name={name}
            value={value}
            onChange={onChange}
            ref={ref}
            className="w-full outline-none bg-transparent"
            placeholder={placeholder}
            type={type}
          />
        </div>
        <div className="text-red-500 text-xs">{errorMessage}</div>
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
