import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../../Pages/Loading/Loading";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchCategories() {
      setIsLoading(true);
      const res = await fetch(
        `https://workwave-vq08.onrender.com/api/categories`
      );
      const data = await res.json();
      setCategoriesData(data);
      setIsLoading(false);
    }
    fetchCategories();
  }, []);
  if (isLoading) return <Loading></Loading>;
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
      {categoriesData ? (
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-16 gap-y-5 mt-20 px-20">
          {categoriesData.map((category) => {
            return (
              <NavLink
                to={`/categories?cat=${category.categoryName}`}
                key={category.title}
                className="bg-white flex flex-col justify-center items-center rounded-md shadow-lg p-3 hover:-translate-y-2 relative before:absolute  before:top-0 before:left-0 before:w-0 hover:before:w-full before:h-1 before:bg-blue-500 transition-all duration-300 before:transition-all before:duration-300"
              >
                <img
                  src={category.imgURL}
                  alt={category.title}
                  className="border-b-2 border-solid border-gray-400 pb-3 mb-3"
                />
                <p className="main-font font-semibold text-black">
                  {category.title}
                </p>
              </NavLink>
            );
          })}
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Categories;
