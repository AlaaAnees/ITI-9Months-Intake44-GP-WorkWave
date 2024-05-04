import { useEffect, useState } from "react";
import Loading from "../../Pages/Loading/Loading";
import { useSearchParams } from "react-router-dom";
import GigCard from "../GigCard/GigCard";
const BASE_URL = "https://workwave-vq08.onrender.com";

function GigsContainer({ minPrice, maxPrice }) {
  const [searchParams] = useSearchParams();
  const [gigs, setGigs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchGigs() {
      setIsLoading(true);
      const res = await fetch(
        `${BASE_URL}/api/gigs?cat=${
          searchParams.get("cat") || ""
        }&min=${minPrice}&max=${maxPrice}`
      );
      const data = await res.json();
      setGigs(data);
      setIsLoading(false);
    }
    fetchGigs();
  }, [minPrice, maxPrice, searchParams]);
  if (isLoading) return <Loading background="transparent"></Loading>;
  return (
    <>
      <ul className="container grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-9  ">
        {gigs && gigs.map((g) => <GigCard key={g._id} gig={g}></GigCard>)}
      </ul>
    </>
  );
}

export default GigsContainer;
