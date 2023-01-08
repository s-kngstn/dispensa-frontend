interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
}

export default function Button({ text, type }: ButtonProps) {
  return (
    <button
      type={type}
      className="flex w-full justify-center rounded-sm border border-transparent bg-dispensa-orange py-2 px-4 text-sm font-medium text-dispensa-black -sm hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-dispensa-black focus:ring-offset-2"
    >
      {text}
    </button>
  );
}
