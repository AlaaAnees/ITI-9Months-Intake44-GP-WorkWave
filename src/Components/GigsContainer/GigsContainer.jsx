import { useEffect, useState } from "react";
import Loading from "../../Pages/Loading/Loading";
import { useSearchParams } from "react-router-dom";
import GigCard from "../GigCard/GigCard";
const BASE_URL = "https://workwave-vq08.onrender.com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function GigsContainer({ minPrice, maxPrice }) {
  const [searchParams] = useSearchParams();
  const [gigs, setGigs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isdelete, setisdeleted] = useState(false);
  const isadmin = JSON.parse(localStorage.getItem("user"))?.isAdmin;
  const token = JSON.parse(localStorage.getItem("token"));
  async function handleDeleteGig(id) {
    const res = await fetch(
      `https://workwave-vq08.onrender.com/api/gigs/delete/${id}`,
      {
        method: "Delete",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    setisdeleted(!isdelete);
    console.log(data);
  }

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
  }, [minPrice, maxPrice, searchParams, isdelete]);
  if (isLoading) return <Loading background="transparent"></Loading>;
  return (
    <>
      <ul className="container grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-9   ">
        {gigs &&
          gigs.map((g) => (
            <li key={g._id} className="relative">
              <GigCard gig={g} display={true}></GigCard>
              <div className="text-right cursor-pointers absolute bottom-3  right-5">
                {isadmin && (
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="text-red-700 "
                    onClick={() => handleDeleteGig(g._id)}
                  />
                )}
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default GigsContainer;
