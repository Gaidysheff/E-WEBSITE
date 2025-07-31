import { Link } from "@tanstack/react-router";

const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-200 sticky top-0 z-20 w-full py-4">
        <div class="container bg-red-200">
          <div
            className="flex justify-between items-center main-max-width
            mx-auto padding-x"
          >
            <Link href="/">
              <h1 className="text-2xl font-extrabold text-gray-900">E-Shopt</h1>
            </Link>

            {/* <div className="max-lg:hidden">
            <SearchForm />
          </div> */}

            {/* <div className="max-lg:block hidden">
              <SearchButton
              handleSearch={handleSearch}
              showSearchForm={showSearchForm}
              />
            </div> */}

            {/* <div className="max-md:hidden">
            <NavItems />
          </div> */}

            {/* <div className="max-md:block hidden">
            <MobileNavbar />
          </div> */}
          </div>
        </div>
      </nav>

      {/* {showSearchForm && (
        <div className="w-[300px] mx-auto mt-4 max-lg:block hidden">
          <SearchForm />
        </div>
      )} */}
    </>
  );
};

export default NavBar;
