import { useEffect, useState } from "react";
// import { fetchGigsOutsideContext, useGig } from "../../Context/GigsContext";
import AddToWishlist from "../Wishlist/AddToWishlist";
import Loading from "../../Pages/Loading/Loading";
import { useSearchParams } from "react-router-dom";
const BASE_URL = "https://workwave-vq08.onrender.com";

function GigsContainer({ minPrice, maxPrice }) {
  const [searchParams] = useSearchParams();
  const [gigs, setGigs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cat, setCat] = useState(() => searchParams.get("cat") || "");

  useEffect(() => {
    async function fetchGigs() {
      console.log("eamannamam");
      setIsLoading(true);
      const res = await fetch(
        `${BASE_URL}/api/gigs?cat=${cat}&min=${minPrice}&max=${maxPrice}`
      );
      const data = await res.json();
      console.log(data, cat);
      setGigs(data);
      setIsLoading(false);
    }
    fetchGigs();
  }, [cat, minPrice, maxPrice]);
  if (isLoading) return <Loading background="transparent"></Loading>;
  return (
    <>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 ">
        {gigs &&
          gigs.map((g) => (
            <li key={g._id}>
              <img src={g.cover} alt={g.title} height={100} />
              {/* second line */}
              <div>
                {/* gig owner need from back */}
                {/* rating */}
                <span>{g.totalStars}</span>
              </div>
              {/* third line */}
              <p>{g.title}</p>
              {/* forth line */}
              <div>
                <span>{g.price}$</span>
                <AddToWishlist></AddToWishlist>
              </div>
            </li>
          ))}
      </ul>
      <button onClick={() => setCat("design")}>clikkkk</button>
    </>
  );
}

export default GigsContainer;
