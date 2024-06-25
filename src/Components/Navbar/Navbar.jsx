import { useContext, useEffect, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../../Context/authContext";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [dropDownVisibility, setDropDownVisibility] = useState(false);
  const { userData, setUserData, setToken } = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState("");
  const [filtered, setFiltered] = useState([]);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const fetching = async (searchInput, controller) => {
    try {
      const res = await fetch("https://workwave-vq08.onrender.com/api/gigs", {
        signal: controller.signal,
      });
      const data = await res.json();
      setFiltered(data.filter((item) => item.title.includes(searchInput)));
      console.log(data);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Error fetching data:", error);
      }
    }
  };

  const debounceSearch = (input) => {
    clearTimeout(searchRef.current);

    const controller = new AbortController();
    searchRef.current = setTimeout(() => {
      fetching(input, controller);
    }, 300);

    return () => controller.abort();
  };

  useEffect(() => {
    if (searchInput) {
      debounceSearch(searchInput);
    } else {
      setFiltered([]);
    }
  }, [searchInput]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUserData(null);
    setToken(null);
  };

  const handleDropDown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDownVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDropDown);
    return () => {
      document.removeEventListener("click", handleDropDown);
    };
  }, []);

  console.log(userData);

  document.addEventListener("click", handleDropDown);
  // console.log(userData);
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
              alt=""
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
        <div className="hidden lg:flex justify-evenly grow items-center">
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative">
              {userData?.isAdmin ? (
                <NavLink
                  to="/dashboard"
                  className=" ml-8 font-semibold text-[#595959]  text-[20px] main-font text-decoration-none leading-6 hover:text-blue-400 transition-all duration-300"
                >
                  Dashboard
                </NavLink>
              ) : (
                ""
              )}
            </div>
            <NavLink
              to="/explore"
              className="flex items-center text-[20px] text-[#595959] main-font gap-x-1 font-semibold leading-6 hover:text-blue-400 transition-all duration-300"
            >
              Explore
            </NavLink>
            <NavLink
              to="become-seller"
              className=" font-semibold text-[#595959]  text-[20px] main-font text-decoration-none leading-6 hover:text-blue-400 transition-all duration-300"
            >
              Become a seller
            </NavLink>
          </div>
          <div className="hidden relative lg:block">
            <input
              type="text"
              placeholder="Anything"
              className="outline-none  border rounded-lg border-black py-[5px] shadow-md	px-2.5 w-[300px] "
              onChange={handleSearch}
              value={searchInput}
            />
            <IoSearchOutline className="absolute top-1 right-2 text-blue-400 text-2xl font-extrabold" />
            <div className="absolute bg-white w-full mt-2 rounded-lg shadow-2xl z-10 max-h-72 overflow-y-auto">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="border-b-2 border-stone-200 hover:bg-stone-200 cursor-pointer transition-all duration-300 p-3 hover:ps-5 flex items-center gap-3 "
                >
                  <img src={item.cover} alt="category img" className="w-1/6" />
                  <Link className="sub-font-2 font-medium">{item.title}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {!userData ? (
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
        ) : (
          <div
            className="hidden lg:flex gap-2 justify-center items-center cursor-pointer relative"
            ref={dropdownRef}
            onClick={() => setDropDownVisibility((drop) => !drop)}
          >
            <h2 className="sub-font-3  text-[#89898A]">{userData.username}</h2>
            <img src={userData.img} alt="" className="w-10 h-10 rounded-full" />
            <div
              ref={dropdownRef}
              className={`bg-white shadow-lg py-3 px-6 rounded-lg w-52 absolute top-16 z-10 ${
                dropDownVisibility ? "" : "hidden"
              }`}
            >
              <Link
                className="hover:bg-[#eee] flex items-center gap-1 hover:text-blue-500 transition-all duration-300 sub-font-3 font-semibold rounded-md p-2"
                to={"/profile"}
              >
                <CgProfile />
                Profile
              </Link>
              <Link
                className="hover:bg-[#eee] flex items-center gap-1 hover:text-blue-500 transition-all duration-300 sub-font-3 font-semibold rounded-md p-2"
                to={"/categories"}
              >
                Gigs
              </Link>
              <Link
                className="hover:bg-[#eee] flex items-center gap-1 hover:text-blue-500 transition-all duration-300 sub-font-3 font-semibold rounded-md p-2"
                to={"/newGig"}
              >
                Add New Gigs
              </Link>

              <Link
                className="hover:bg-[#eee] flex items-center gap-1 hover:text-blue-500 transition-all duration-300 sub-font-3 font-semibold rounded-md p-2"
                to={"/order"}
              >
                Order
              </Link>
              <Link
                className="hover:bg-[#eee] flex items-center gap-1 hover:text-blue-500 transition-all duration-300 sub-font-3 font-semibold rounded-md p-2"
                to={"/profile"}
              >
                <CgProfile />
                Profile
              </Link>
              <Link
                className="hover:bg-[#eee] flex items-center gap-1 hover:text-blue-500 transition-all duration-300 sub-font-3 font-semibold rounded-md p-2"
                to={"/wishlist"}
              >
                <FaHeart className="text-red-600"></FaHeart>
                Wishlist
              </Link>
              <Link
                className="hover:bg-[#eee] flex items-center gap-1 hover:text-blue-500 transition-all duration-300 sub-font-3 font-semibold rounded-md p-2"
                to={"/orders"}
              >
                Orderes
              </Link>
              <Link
                className="hover:bg-[#eee] flex items-center gap-1 hover:text-blue-500 transition-all duration-300 sub-font-3 font-semibold rounded-md p-2"
                to={"/messages"}
              >
                Messages
              </Link>
              <Link
                to={"/"}
                className="hover:bg-[#eee] flex items-center gap-1 hover:text-blue-500 transition-all duration-300 sub-font-3 font-semibold rounded-md p-2"
                onClick={handleLogOut}
              >
                <CiLogout />
                Logout
              </Link>
            </div>
          </div>
        )}
      </nav>
      <div
        className={`${isMobile ? "" : "hidden"} lg:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">WorkWave</span>
              <img
                className="h-8 w-auto"
                src="/assets/imgs/logo-no-background 5.png"
                alt=""
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
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/categories"
                  className="text-[#595959] text-[20px] main-font -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-400/10"
                >
                  Categories
                </NavLink>
                <div className="-mx-3">
                  {/* 'Product' sub-menu, show/hide based on menu state. */}
                </div>
                {userData && (
                  <NavLink
                    className="-mx-3 flex flex-col items-center rounded-lg justify-center it px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                    to="/profile"
                    onClick={() => setIsMobile(false)}
                  >
                    <img
                      src={userData.img}
                      alt="user img"
                      className="w-12 h-12 rounded-full "
                    />{" "}
                    {userData.username}
                    {`'`}s Profile
                  </NavLink>
                )}
                <div className="relative w-fit">
                  <input
                    type="text"
                    placeholder="Anything"
                    className="outline-none  border rounded-lg border-black py-[5px] shadow-md	px-2.5 w-[300px]"
                  />
                  <IoSearchOutline className="absolute top-1 right-2 text-blue-400 text-2xl font-extrabold" />
                </div>

                {/* {userData && (
                  <NavLink
                    className="-mx-3 flex items-center gap-1 rounded-lg px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                    to="/wishlist"
                    onClick={handleLogOut}
                  >
                    wishlist
                    <FaHeart className="text-red-600 text-sm"></FaHeart>
                  </NavLink>
                )} */}

                {userData && (
                  <NavLink
                    className="-mx-3 block rounded-lg px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                    to="/categories"
                    onClick={() => setIsMobile(false)}
                  >
                    Gigs
                  </NavLink>
                )}
                {userData && (
                  <NavLink
                    className="-mx-3 block rounded-lg px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                    to="/newGig"
                    onClick={() => setIsMobile(false)}
                  >
                    Add New Gigs
                  </NavLink>
                )}
                {userData && (
                  <NavLink
                    className="-mx-3 block rounded-lg px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                    to="/orders"
                    onClick={() => setIsMobile(false)}
                  >
                    Orders
                  </NavLink>
                )}

                {userData && (
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                    to={"/wishlist"}
                  >
                    Wishlist
                  </Link>
                )}
                {userData && (
                  <NavLink
                    className="-mx-3 block rounded-lg px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                    to="/messages"
                    onClick={() => setIsMobile(false)}
                  >
                    Messages
                  </NavLink>
                )}
                <NavLink
                  to="/explore"
                  className="text-[#595959] text-[20px] main-font -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-400/10"
                >
                  Explore
                </NavLink>
                <NavLink
                  to="/become-seller"
                  className="text-[#595959] text-[20px] main-font -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-400/10"
                >
                  Become a seller
                </NavLink>
              </div>
              {!userData ? (
                <div className="py-6">
                  <NavLink
                    to="/login"
                    className="text-[#595959] text-[20px] main-font -mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 hover:bg-gray-400/10"
                  >
                    Sign in
                  </NavLink>
                  <NavLink
                    to="/register"
                    className=" text-[#595959] text-[20px] main-font -mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 hover:bg-gray-400/10"
                  >
                    Join
                  </NavLink>
                </div>
              ) : (
                <div className="py-6">
                  <NavLink
                    className="text-[#595959] text-[20px] main-font -mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 hover:bg-gray-400/10"
                    to={"/profile"}
                  >
                    <CgProfile />
                    Profile
                  </NavLink>
                  <NavLink
                    className="text-[#595959] text-[20px] main-font -mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 hover:bg-gray-400/10"
                    to={"/categories"}
                  >
                    Gigs
                  </NavLink>
                  <NavLink
                    className="text-[#595959] text-[20px] main-font -mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 hover:bg-gray-400/10"
                    onClick={handleLogOut}
                  >
                    <CiLogout />
                    Logout
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
