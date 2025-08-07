import { Laptop } from "lucide-react";

const CategoryCard = () => {
  return (
    <div
      className="w-[160px] h-[90px] sm:w-[220px] sm:h-[120px] bg-card rounded-2xl 
			flex flex-col items-center justify-center p-4 shadow-xl
      dark:drop-shadow-[5px_5px_5px_rgba(255,255,255,0.25)]
			transition-transform duration-300 hover:scale-110 cursor-pointer"
    >
      {/* Category Icon */}
      <div className="bg-card p-1 sm:p-3 rounded-full">
        <Laptop className="stroke-primaryDark" width={40} height={40} />
      </div>

      {/* Category Name */}
      <p className="font-semibold sm:mt-1 text-primaryDark text-sm sm:text-lg">
        Electronics
      </p>
    </div>
  );
};

export default CategoryCard;
