import { NavLink } from "react-router-dom";

const categoriesData = [
  {
    name: "Programming & Tech",
    imgSrc: "/assets/imgs/programming-svgrepo-com 1.png",
  },
  {
    name: "Graphics & Design",
    imgSrc: "/assets/imgs/art-pc-ui-svgrepo-com 1.png",
  },
  {
    name: "Business",
    imgSrc: "/assets/imgs/business-svgrepo-com 1.png",
  },
  {
    name: "Music & Audio",
    imgSrc: "/assets/imgs/audio-svgrepo-com 1.png",
  },
  {
    name: "Digital Marketing",
    imgSrc: "/assets/imgs/Group.png",
  },
  {
    name: "Writing & Translation",
    imgSrc: "/assets/imgs/writing-notepad-svgrepo-com 1.png",
  },
  {
    name: "LifeStyle",
    imgSrc: "/assets/imgs/coffe-svgrepo-com 1.png",
  },
  {
    name: "Photography",
    imgSrc: "/assets/imgs/photography-camera-outline-svgrepo-com 1.png",
  },
  {
    name: "Data",
    imgSrc: "/assets/imgs/data-analysis-svgrepo-com 1.png",
  },
  {
    name: "Video & Animation",
    imgSrc: "/assets/imgs/video-frame-play-horizontal-svgrepo-com 1.png",
  },
];

const Categories = () => {
  return (
    <div className="bg-blue-50 pt-14  relative">
      <img
        src="/public/assets/imgs/Shapes.png"
        alt=""
        className="absolute top-4 -left-16"
      />
      <p className="sub-font-3 ps-14 text-3xl font-extrabold">
        Your needs, our solutions - always in sync.
      </p>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-16 gap-y-5 mt-20 px-20">
        {categoriesData.map((category) => {
          return (
            <NavLink
              key={category.name}
              className="bg-white flex flex-col justify-center items-center rounded-md shadow-lg p-3 hover:-translate-y-2 relative before:absolute  before:top-0 before:left-0 before:w-0 hover:before:w-full before:h-1 before:bg-blue-500 transition-all duration-300 before:transition-all before:duration-300"
            >
              <img
                src={category.imgSrc}
                alt={category.name}
                className="border-b-2 border-solid border-gray-400 pb-3 mb-3"
              />
              <p className="main-font font-semibold text-black">
                {category.name}
              </p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
