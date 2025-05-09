"use client";

import { useState } from "react";

export default function Toggle({ func }) {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-row gap-6 md:flex-col md:gap-2">
      
      <p className="font-semibold">Remove existing fence</p>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            if (isChecked) {
              func(0);
            } else {
              func(9);
            }
          }}
          className="sr-only"
        />
        <div
          className={`w-14 h-8 rounded-sm flex items-center px-1 transition-colors duration-300 ${isChecked ? "bg-blue-500" : "bg-gray-400"
            }`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-sm shadow-md transform transition-transform duration-300 ${isChecked ? "translate-x-6" : "translate-x-0"
              }`}
          ></div>
        </div>
      </label>
    </div>
  );
}