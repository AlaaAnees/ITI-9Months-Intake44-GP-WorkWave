import { useState } from "react";
import GigsContainer from "../../Components/GigsContainer/GigsContainer";
import { Link, useSearchParams } from "react-router-dom";

const categoryType = [
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

  return (
    <>
      <section className="  bg-white p-3  ">
        <ul className="flex justify-between items-center gap-6 container  ">
          {categoryType.map((cat) => {
            console.log(searchParams.get("cat"), cat.route);
            return (
              <Link
                to={`/categories?cat=${cat.route}`}
                key={cat.title}
                // className="hover:border-solid hover:border-[#172554] border-b-[2px] border-transparent"
                className={` flex flex-col justify-center items-center 
            p-3 relative before:absolute  before:bottom-0 text-sm  text-gray-700 
             before:left-0 before:w-0 hover:before:w-full before:h-1 before:bg-blue-500
              transition-all duration-300 before:transition-all before:duration-300 ${
                searchParams.get("cat") == cat.route
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
      <section className="container mt-5 bg-white p-3  rounded-md">
        <div className="flex justify-around items-center gap-6">
          <span className="font-semibold text-xl text-[#172554]">Budget</span>
          <div className="space-x-6 ">
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
      <section className="container py-8">
        <GigsContainer minPrice={minPrice} maxPrice={maxPrice}></GigsContainer>
      </section>
    </>
  );
}

export default CategoriesPage;
