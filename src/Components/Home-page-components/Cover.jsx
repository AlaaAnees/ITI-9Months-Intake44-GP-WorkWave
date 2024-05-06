import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Cover = () => {
  return (
    <div className="flex items-center justify-center lg:justify-between px-24 bg-blue-400 pt-16">
      <div className="w-[537px] flex flex-col  items-center">
        <h2 className="sub-font text-white text-3xl md:text-4xl lg:text-5xl text-center mb-10">
          Start your “freelance” journey with instant access to top talent
        </h2>
        <div className="relative w-fit">
          <input
            type="text"
            placeholder="search freelance work"
            className="block outline-none py-[8px] w-[280px] md:py-[13px] md:w-[300px] lg:py-[17px] ps-4 lg:w-[400px] rounded-xl sm:text-lg mx-auto"
          />
          <IoSearchOutline className="absolute top-2 md:top-3 right-3 text-white text-9xl bg-blue-400 rounded-full w-7 h-7 md:w-9 md:h-9 p-2" />
        </div>
        <div className="flex flex-wrap justify-center w-[300px] gap-3 mx-auto my-[30px]">
          <NavLink
            to={"/any"}
            className="border border-white  sub-font-2 text-xs py-1 block rounded-full w-[133px] text-center transition-all duration-300 text-white hover:bg-white hover:text-blue-400"
          >
            AI services
          </NavLink>
          <NavLink
            to={"/any"}
            className="border border-white text-white sub-font-2 text-xs py-1 block  rounded-full w-[133px] text-center hover:bg-white hover:text-blue-400 transition-all duration-300"
          >
            Web Design
          </NavLink>
          <NavLink
            to={"/any"}
            className="border border-white text-white sub-font-2 text-xs py-1 block  rounded-full w-[133px] text-center hover:bg-white hover:text-blue-400 transition-all duration-300"
          >
            Sales & Mraketing
          </NavLink>
          <NavLink
            to={"/any"}
            className="border border-white text-white sub-font-2 text-xs py-1 block  rounded-full w-[133px] text-center hover:bg-white hover:text-blue-400 transition-all duration-300"
          >
            Development & IT
          </NavLink>
        </div>
      </div>
      <div className="hidden lg:flex relative">
        <span className="absolute sub-font text-[#BFDBFE] top-1/4 left-[10%]">
          <span className=" italic">&quot; </span>
          <span className="font-medium">Coding Is Easy</span> <br />
          <span>
            {" "}
            the difficult one is you <br /> too lazy to start.
            <span className=" italic"> &quot;</span>
          </span>
        </span>
        <img src="./assets/imgs/1 1.png" alt="" />
      </div>
    </div>
  );
};

export default Cover;
