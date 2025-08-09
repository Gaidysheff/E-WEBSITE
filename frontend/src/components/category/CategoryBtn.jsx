import { Laptop } from "lucide-react";
import React from "react";

const CategoryBtn = () => {
  return (
    <button className="cat-btn">
      {/* Icon Container */}
      <div
        className="w-[40px] h-[40px] rounded-full overflow-hidden 
			flex items-center justify-center shadow-xl icon-container-round"
      >
        <Laptop
          width={30}
          height={30}
          className="object-contain stroke-gray-600"
          alt="thumbnail"
        />
      </div>

      {/* Category Name */}
      <p className="font-semibold text-gray-800 text-[16px]">Electronics</p>
    </button>
  );
};

export default CategoryBtn;
