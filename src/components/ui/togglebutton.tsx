import { Props } from "@/index";
import { useState } from "react";

export default function ToggleButton({ isEdit }: Props){
    const [isToggled, setIsToggled] = useState(true);

    const handleToggle = () => {
        if (isEdit) {
            setIsToggled(prevState => !prevState);
        }
    };
  
    return (
      <div>
        <button
          onClick={handleToggle}
          className={`${
            isToggled
              ? 'bg-green-500 hover:bg-green-700'
              : 'bg-gray-300 hover:bg-gray-400'
          } text-white font-bold py-2 px-4 rounded`}
        >
          {isToggled ? 'Yes' : 'No'}
        </button>
      </div>
    );
};
