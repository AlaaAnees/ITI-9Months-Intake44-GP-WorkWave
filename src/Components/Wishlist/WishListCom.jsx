import { useContext, useEffect, useState } from "react";
import GigCard from "../GigCard/GigCard";
// import { WishContex } from "../../WishListContext";
function WishListCom() {
  const [fav, setfav] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  // const { favoriteList, handleAddToWishlist: handleAddToWishlistcontext } =
  //   useContext(WishContex);

  useEffect(() => {
    async function getUserFav() {
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

      console.log("eman eman eman", data.data.userFavorites);
    }
    getUserFav();
  }, [token]);
  return (
    <>
      <ul className="container grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-9  m-7 ">
        {/* {((favoriteList?.length > 0 ? favoriteList : "") && fav)?.map((gig) => (
          <GigCard gig={gig} key={gig._id}></GigCard>
        ))} */}
        {fav?.map((gig) => (
          <GigCard gig={gig} key={gig._id}></GigCard>
        ))}
      </ul>
    </>
  );
}

export default WishListCom;
