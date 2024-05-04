import { useLoaderData } from "react-router";
import BestPart from "../../Components/Home-page-components/BestPart";
import Categories from "../../Components/Home-page-components/Categories";
import Cover from "../../Components/Home-page-components/Cover";
import Inspring from "../../Components/Home-page-components/Inspring";
import JoinWorkWave from "../../Components/Home-page-components/JoinWorkWave";
import PopularServices from "../../Components/Home-page-components/PopularServices";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch(
        `https://workwave-vq08.onrender.com/api/categories`
      );
      const data = await res.json();
      setCategoriesData(data);
      setIsLoading(false);
    }
    fetchCategories();
  }, [setIsLoading]);

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <>
      <Cover />
      <Categories categoriesData={categoriesData} />
      <PopularServices />
      <BestPart />
      <Inspring />
      <JoinWorkWave />
    </>
  );
}

export default Home;
