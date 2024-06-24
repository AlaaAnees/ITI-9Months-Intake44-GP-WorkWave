import { useEffect, useState } from "react";
import GigCard from "../GigCard/GigCard";
import { FaHeart } from "react-icons/fa";
import Loading from "../../Pages/Loading/Loading";

function WishListCom() {
  const [fav, setfav] = useState([]);
  const [isloading, setisloading] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));
  async function getUserFav() {
    setisloading(true);
    const res = await fetch(
      `https://workwave-vq08.onrender.com/api/favorites`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    setfav(data.data.userFavorites);
    setisloading(false);

    console.log("eman eman eman", data.data.userFavorites);
  }

  async function handleRemoveFav(gig) {
    const res = await fetch(
      `https://workwave-vq08.onrender.com/api/favorites/${gig._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const fav = await res.json();
    setfav(fav.data.userFavorites);
  }
  useEffect(() => {
    getUserFav();
  }, [token]);
  return (
    <>
      {isloading ? (
        <Loading></Loading>
      ) : (
        <ul className="container grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-9  m-7 ">
          {fav?.map((gig) => (
            <li key={gig._id} className="relative">
              <GigCard gig={gig} display={false}></GigCard>
              <FaHeart
                className="text-red-600 absolute right-5 bottom-5 cursor-pointer"
                onClick={() => {
                  handleRemoveFav(gig);
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default WishListCom;
