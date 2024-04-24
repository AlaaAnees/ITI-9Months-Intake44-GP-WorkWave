import { useState } from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">WorkWave</span>
            <img
              className=" w-[133px]"
              src="/assets/imgs/logo-no-background 5.png"
              alt
            />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMobile((isMobile) => !isMobile)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex justify-evenly grow   items-center  ">
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative">
              <NavLink
                to="/explore"
                className="flex items-center text-[20px] text-[#595959] main-font gap-x-1 font-semibold leading-6 hover:text-blue-400 transition-all duration-300"
              >
                Explore
              </NavLink>
            </div>
            <NavLink
              to="/any"
              className=" font-semibold text-[#595959]  text-[20px] main-font text-decoration-none leading-6 hover:text-blue-400 transition-all duration-300"
            >
              English
            </NavLink>
            <NavLink
              to="become-seller"
              className=" font-semibold text-[#595959]  text-[20px] main-font text-decoration-none leading-6 hover:text-blue-400 transition-all duration-300"
            >
              Become a seller
            </NavLink>
          </div>
          <div className="hidden lg:block">
            <input
              type="text"
              placeholder="Anything"
              className="outline-none  border rounded-lg border-black py-[5px] shadow-md	px-2.5 w-[300px]"
            />
          </div>
        </div>
        <div className="hidden gap-[40px] lg:flex lg:flex-1 lg:justify-end items-center">
          <NavLink
            to="/login"
            className=" font-semibold text-[#595959]  hover:text-blue-400 transition-all duration-300 text-[20px] main-font leading-6 text-decoration-none "
          >
            Sign in
          </NavLink>
          <NavLink
            to="/register"
            className=" font-semibold  text-[20px] main-font leading-6 text-decoration-none text-blue-400 border-2 py-[3px] px-[15px]  rounded-lg border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
          >
            Join
          </NavLink>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div className={isMobile ? "" : "hidden"} role="dialog" aria-modal="true">
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">WorkWave</span>
              <img
                className="w-[133px]"
                src="/assets/imgs/logo-no-background 5.png"
                alt
              />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMobile((isMobile) => !isMobile)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 ">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                  {/* 'Product' sub-menu, show/hide based on menu state. */}
                </div>
                <NavLink
                  className="-mx-3 block rounded-lg px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                  to="/explore"
                  onClick={() => setIsMobile(false)}
                >
                  Explore
                </NavLink>
                <NavLink
                  to="/any"
                  onClick={() => setIsMobile(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                >
                  English
                </NavLink>
                <NavLink
                  to="become-seller"
                  onClick={() => setIsMobile(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                >
                  Become a seller
                </NavLink>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Anything"
                  className="outline-none  border rounded-lg border-black py-[5px] shadow-md	px-2.5 w-[300px]"
                />
              </div>
              <div className="py-6 flex justify-center mt-3 gap-5 items-center">
                <NavLink
                  to="login"
                  onClick={() => setIsMobile(false)}
                  className="text-sm font-semibold text-[#595959]  hover:text-blue-400 transition-all duration-300 text-[20px] main-font leading-6 text-decoration-none "
                >
                  Sign in
                </NavLink>
                <NavLink
                  to="register"
                  onClick={() => setIsMobile(false)}
                  className="text-sm font-semibold  text-[20px] main-font leading-6 text-decoration-none text-blue-400 border-2 py-[3px] px-[15px]  rounded-lg border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Join
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

///assets/imgs/logo-no-background 5.png
