import { Link } from "@tanstack/react-router";
import MobileNavbar from "./MobileNavbar.jsx";
import NavItems from "./NavItems.jsx";
import SearchButton from "./SearchButton.jsx";
import SearchForm from "./SearchForm.jsx";
import ThemeSwitch from "./ThemeSwitch.jsx";
import { useState } from "react";
import { useTheme } from "@/store/ThemeContext.jsx";

const NavBar = () => {
  const { theme } = useTheme();

  const [showSearchForm, setShowSearchForm] = useState(false);

  const handleSearch = () => {
    setShowSearchForm((curr) => !curr);
  };
  return (
    <>
      <nav
        className="bg-card sticky top-0 z-20 w-full py-4
        border-b border-primaryLight"
      >
        <div className="container">
          <div className="flex justify-between items-center main-max-width">
            <div className="w-full flex justify-between items-center">
              <Link href="/">
                <h1
                  className="text-2xl font-extrabold text-primaryDark
                  hover:text-primaryDark/50 hover:scale-110 transition duration-300"
                >
                  E-Shop
                </h1>
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
            {theme === "light" ? (
              <ThemeSwitch id="dark-btn" />
            ) : (
              <ThemeSwitch id="light-btn" />
            )}
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
