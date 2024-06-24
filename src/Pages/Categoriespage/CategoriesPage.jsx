import { useState } from "react";
import GigsContainer from "../../Components/GigsContainer/GigsContainer";
import { Link, useSearchParams } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
const categoryType = [
  { title: "All categories", route: "" },
  { title: "Graphic & Design", route: "design" },
  { title: "Programming", route: "programming" },
  { title: "Business", route: "business" },
  { title: "Music & Audio", route: "musicaudio" },
  { title: "Digital Marketing", route: "digitalmarketing" },
  { title: "Writing & Translation", route: "writingtranslation" },
  { title: "Lifestyle", route: "lifestyle" },
  { title: "Photography", route: "photography" },
  { title: "Data", route: "data" },
  { title: "Video & Animation", route: "videoanimation" },
];

function CategoriesPage() {
  const [searchParams] = useSearchParams();
  const [minPrice, setminPrice] = useState("");
  const [maxPrice, setmaxPrice] = useState("");
  const [showdropdown, setShowdropdown] = useState(false);
  return (
    <>
      <section className="  bg-white p-3 relative ">
        <div
          className=" xl:hidden flex items-center justify-center"
          onClick={() => {
            setShowdropdown((s) => !s);
          }}
        >
          <span>Categories </span>
          <span>
            <MdOutlineArrowDropDown />
          </span>
        </div>
        <ul
          className={` ${showdropdown ? "" : "hidden "}
          xl:mx-auto
        xl:justify-between xl:items-center gap-2 xl:gap:6 container
        xl:flex flex-column
        xl:flex-row   `}
        >
          {categoryType.map((cat) => {
            // console.log(searchParams.get("cat"), cat.route);
            return (
              <Link
                to={`/categories?cat=${cat.route}`}
                key={cat.title}
                onClick={() => {
                  setShowdropdown((s) => !s);
                }}
                // className="hover:border-solid hover:border-[#172554] border-b-[2px] border-transparent"
                className={` flex flex-col justify-center items-center
            p-3 relative before:absolute  before:bottom-0 text-sm  text-gray-700
             before:left-0 before:w-0 hover:before:w-full before:h-1 before:bg-blue-500
              transition-all duration-300 before:transition-all before:duration-300 ${
                searchParams.get("cat") == cat.route ||
                (searchParams.get("cat") == null && cat.route == "")
                  ? "before:w-full before:h-1 before:bg-blue-500"
                  : ""
              }`}
              >
                {cat.title}
              </Link>
            );
          })}
        </ul>
      </section>
      <section className="container mx-auto ">
        <div className="flex flex-column mt-5 p-3  rounded-xl bg-white md:flex-row justify-around items-center gap-6">
          <span className="font-semibold text-xl text-[#172554] ">Budget</span>
          <div className="space-x-0 sm:space-x-6  text-center  space-y-2">
            <input
              className="border-solid border-[#172554] border-2 rounded-xl  px-6 py-[5px]"
              type="text"
              name="min"
              value={minPrice}
              onChange={(e) => setminPrice(e.target.value)}
              placeholder="$ minimum price "
            />
            <input
              className="border-solid border-[#172554] border-2 rounded-xl  px-6  py-[5px]"
              type="text"
              name="max"
              value={maxPrice}
              onChange={(e) => setmaxPrice(e.target.value)}
              placeholder="$ maximum price "
            />
          </div>
        </div>
      </section>
      <section className="container py-8 mx-auto">
        <GigsContainer minPrice={minPrice} maxPrice={maxPrice}></GigsContainer>
      </section>
    </>
  );
}

export default CategoriesPage;
