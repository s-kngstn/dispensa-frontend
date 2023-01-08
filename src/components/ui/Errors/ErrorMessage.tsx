import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface ErrorMessageProps {
  message:
    | "string"
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
    | any; // TODO: Fix this type
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="mt-1">
      <p className="text-dispensa-orange">{message}</p>
    </div>
  );
}
