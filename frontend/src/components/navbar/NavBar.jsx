import { Link } from "@tanstack/react-router";
import MobileNavbar from "./MobileNavbar.jsx";
import NavItems from "./NavItems.jsx";
import SearchButton from "./SearchButton.jsx";
import SearchForm from "./SearchForm.jsx";
import { useState } from "react";

const NavBar = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);

  const handleSearch = () => {
    setShowSearchForm((curr) => !curr);
  };
  return (
    <>
      <nav className="bg-gray-200 sticky top-0 z-20 w-full py-4">
        <div className="container bg-red-200">
          <div
            className="flex justify-between items-center main-max-width 
          mx-auto"
          >
            <Link href="/">
              <h1 className="text-2xl font-extrabold text-gray-900">E-Shop</h1>
            </Link>

            <div className="max-lg:block hidden">
              <SearchButton
                handleSearch={handleSearch}
                showSearchForm={showSearchForm}
              />
            </div>

            <div className="max-lg:hidden">
              <SearchForm />
            </div>

            <div className="max-md:hidden">
              <NavItems />
            </div>

            <div className="max-md:block hidden">
              <div className="flex items-center">
                <MobileNavbar />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showSearchForm && (
        <div className="w-[300px] mx-auto mt-4 max-lg:flex justify-center hidden">
          <SearchForm />
        </div>
      )}
    </>
  );
};

export default NavBar;
