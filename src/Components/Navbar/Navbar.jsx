import {
  useContext,
  useRef,
  useState,
} from 'react';

import { CgProfile } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';
import { IoSearchOutline } from 'react-icons/io5';
import {
  Link,
  NavLink,
} from 'react-router-dom';

import { AuthContext } from '../../Context/authContext';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [dropDownVisibility, setDropDownVisibility] = useState(false);
  const { userData } = useContext(AuthContext);
  const { setUserData } = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const { setToken } = useContext(AuthContext);

  const dropdownRef = useRef(null);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUserData(null);
    setToken(null);
  };
  const handleDropDown = () => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDownVisibility(false);
    }
  };
  document.addEventListener("click", handleDropDown);
  console.log(userData);
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
        <div className="hidden lg:flex justify-evenly grow   items-center  ">
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative">
              <NavLink
                to="/categories"
                className=" font-semibold text-[#595959]  text-[20px] main-font text-decoration-none leading-6 hover:text-blue-400 transition-all duration-300"
              >
                Categories
              </NavLink>
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
            <NavLink
              to="chats"
              className=" font-semibold text-[#595959]  text-[20px] main-font text-decoration-none leading-6 hover:text-blue-400 transition-all duration-300"
            >
              Chats
            </NavLink>
            <NavLink
              to="chat"
              className=" font-semibold text-[#595959]  text-[20px] main-font text-decoration-none leading-6 hover:text-blue-400 transition-all duration-300"
            >
              Single Chat
            </NavLink>
          </div>
          <div className="hidden relative lg:block">
            <input
              type="text"
              placeholder="Anything"
              className="outline-none  border rounded-lg border-black py-[5px] shadow-md	px-2.5 w-[300px] "
            />
            <IoSearchOutline className="absolute top-1 right-2 text-blue-400 text-2xl font-extrabold" />
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
            className="hidden lg:flex gap-2  justify-center items-center cursor-pointer relative"
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
                to={"/gigs"}
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
                to={"/orders"}
              >
                Orderes
              </Link>
              <Link
                className="hover:bg-[#eee] flex items-center gap-1 hover:text-blue-500 transition-all duration-300 sub-font-3 font-semibold rounded-md p-2"
                to={"/orders"}
              >
                Messages
              </Link>
              <Link
                to={"/"}
                className="hover:bg-[#eee] flex items-center gap-1 hover:text-blue-500 transition-all duration-300 sub-font-3 font-semibold rounded-md p-2"
                onClick={handleLogOut}
              >
                <CiLogout />
                Log out
              </Link>
            </div>
          </div>
        )}
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
            <div className="-my-6 ">
              <div className="space-y-2 py-6">
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
                {userData && (
                  <NavLink
                    className="-mx-3 block rounded-lg px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                    to="/gigs"
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
                  <NavLink
                    className="-mx-3 block rounded-lg px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                    to="/messages"
                    onClick={() => setIsMobile(false)}
                  >
                    Messages
                  </NavLink>
                )}
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
                {userData && (
                  <NavLink
                    className="-mx-3 flex items-center gap-1 rounded-lg px-3 py-2 text-decoration-none text-base font-semibold leading-7 text-[#595959] hover:text-blue-400 transition-all duration-300 hover:bg-gray-50"
                    to="/"
                    onClick={handleLogOut}
                  >
                    <CiLogout />
                    Log out
                  </NavLink>
                )}
              </div>

              {!userData && (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
