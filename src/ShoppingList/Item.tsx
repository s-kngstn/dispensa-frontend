import { useState } from "react";

interface ItemProps {
  // checked: boolean;
  // setChecked: (checked: boolean) => void;
  item: { name: string };
}

export default function Item({ item }: ItemProps) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="bg-white py-2 border-b-3 border-transparent rounded-md">
      <div>
        <input
          className="my-4 ml-5 mr-3 h-4 w-4 rounded border-black border-2 text-black focus:ring-black"
          type={"checkbox"}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span
          className={`text-md font-semibold text-gray-900 ${
            checked && "line-through"
          }`}
        >
          {item.name}
        </span>
      </div>
    </div>
  );
}
