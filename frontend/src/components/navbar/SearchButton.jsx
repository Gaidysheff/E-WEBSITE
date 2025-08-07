import { Search, X } from "lucide-react";

const SearchButton = ({ handleSearch, showSearchForm }) => {
  return (
    <button
      onClick={handleSearch}
      className="size-[30px] rounded-full flex justify-center items-center 
      bg-primaryDark text-primaryLight hover:bg-primaryDark/50 
      group/btn  transition duration-300 hover:scale-110 cursor-pointer"
    >
      {showSearchForm ? (
        <X className="size-4 group-hover/btn:scale-105" />
      ) : (
        <Search className="size-4 group-hover/btn:scale-105" />
      )}
    </button>
  );
};

export default SearchButton;
