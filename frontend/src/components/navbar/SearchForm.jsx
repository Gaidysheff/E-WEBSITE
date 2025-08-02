import { Search } from "lucide-react";

const SearchForm = () => {
  return (
    <form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        className="flex-1 font-bold w-full outline-none"
        placeholder="Search Products"
      />

      <button
        className="size-[30px] rounded-full bg-black flex justify-center 
        items-center cursor-pointer text-white"
      >
        <Search className="size-4" />
      </button>
    </form>
  );
};

export default SearchForm;
