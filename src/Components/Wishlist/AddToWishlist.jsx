import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

function AddToWishlist({ gig }) {
  const [colored, setColored] = useState(false);
  const [isloading, setisloading] = useState(true);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  async function handleAddToWishlist(e, gigid) {
    e.preventDefault();
    if (colored == false) {
      const res = await fetch(
        `https://workwave-vq08.onrender.com/api/favorites/${gigid}`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjMyOTI4YTFmNzVlNzFkNGM1Mjc0NzIiLCJpc1NlbGxlciI6ZmFsc2UsImlhdCI6MTcxNDU5NTgyMX0.WNHjJYm1655OMR1FupH6C0eTB03rzGGygtKG5wiyPxI"}`,
          },
        }
      );
      const data = await res.json();
    } else if (colored == true) {
      const res = await fetch(
        `https://workwave-vq08.onrender.com/api/favorites/${gigid}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjMyOTI4YTFmNzVlNzFkNGM1Mjc0NzIiLCJpc1NlbGxlciI6ZmFsc2UsImlhdCI6MTcxNDU5NTgyMX0.WNHjJYm1655OMR1FupH6C0eTB03rzGGygtKG5wiyPxI"}`,
          },
        }
      );
      const data = await res.json();
    }
    setColored((c) => !c);
  }
  useEffect(() => {
    async function fetchWishlist() {
      setisloading(true);
      const res = await fetch(
        `https://workwave-vq08.onrender.com/api/favorites`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjMyOTI4YTFmNzVlNzFkNGM1Mjc0NzIiLCJpc1NlbGxlciI6ZmFsc2UsImlhdCI6MTcxNDU5NTgyMX0.WNHjJYm1655OMR1FupH6C0eTB03rzGGygtKG5wiyPxI"}`,
          },
        }
      );
      const data = await res.json();
      setisloading(false);

      const foundGig = data.data.userFavorites.find((gigitem) => {
        return gigitem._id === gig._id;
      });
      console.log(foundGig);
      if (foundGig) {
        setColored(true);
      }
    }
    fetchWishlist();
  }, [gig._id]);

  return (
    <div>
      {isloading ? (
        // <FontAwesomeIcon
        //   icon="fa-solid fa-heart"
        //   beat
        //   style={{ color: "#6290df" }}
        // />
        ""
      ) : (
        <FaHeart
          className={`${colored ? "text-red-600" : ""}`}
          onClick={(e) => {
            handleAddToWishlist(e, gig._id);
          }}
        />
      )}
    </div>
  );
}

export default AddToWishlist;
