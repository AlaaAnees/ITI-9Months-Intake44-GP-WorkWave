import { useState } from "react";
import GigsContainer from "../../Components/GigsContainer/GigsContainer";

function CategoriesPage() {
  const [minPrice, setminPrice] = useState("");
  const [maxPrice, setmaxPrice] = useState("");

  return (
    <>
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
