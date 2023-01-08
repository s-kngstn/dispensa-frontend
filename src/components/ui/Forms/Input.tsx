import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: any;
  register?: any;
  wrapperClass?: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  register,
  name,
  error,
  label,
  wrapperClass,
  ...rest
}) => {
  return (
    <div className={wrapperClass}>
      {label && (
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        aria-invalid={error ? "true" : "false"}
        {...register(name)}
        {...rest}
      />
      {error && <span role="alert">{error}</span>}
    </div>
  );
};

export default Input;
