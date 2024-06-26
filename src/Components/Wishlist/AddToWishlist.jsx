import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

function AddToWishlist({ gig }) {
  const [colored, setColored] = useState(false);
  const [isloading, setisloading] = useState(true);

  const token = JSON.parse(localStorage.getItem("token"));
  async function handleAddToWishlist(e, gigid) {
    e.preventDefault();
    if (colored == false) {
      const res = await fetch(
        `https://gp-workwave-production.up.railway.app/api/favorites/${gigid}`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const fav = await res.json();

      // console.log("add", fav);
    } else if (colored == true) {
      const res = await fetch(
        `https://gp-workwave-production.up.railway.app/api/favorites/${gigid}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const fav = await res.json();
    }
    setColored((c) => !c);
  }
  useEffect(() => {
    async function fetchWishlist() {
      setisloading(true);
      const res = await fetch(
        `https://gp-workwave-production.up.railway.app/api/favorites`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();

      setisloading(false);

      const foundGig = data.data?.userFavorites.find((gigitem) => {
        return gigitem._id === gig._id;
      });

      if (foundGig) {
        setColored(true);
      }
    }
    fetchWishlist();
  }, [gig._id, token]);

  return (
    <div>
      {isloading && !token ? (
        ""
      ) : (
        <FaHeart
          className={`${colored ? "text-red-600" : " text-stone-500"}  `}
          onClick={(e) => {
            handleAddToWishlist(e, gig._id);
          }}
        />
      )}
    </div>
  );
}

export default AddToWishlist;
