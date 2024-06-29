import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router";

import Review from "../../Components/Reviews/Review";
import SingleGigContainer from "../../Components/SingleGig/SingleGigContainer";

import { AuthContext } from "../../Context/authContext";
const baseURL = "https://workwave-vq08.onrender.com";
function SingleGig() {
  const { userData } = useContext(AuthContext);
  const { id } = useParams();
  const [singleGigData, setSingleGig] = useState("");

  useEffect(() => {
    async function fetchSingleGig() {
      try {
        // console.log("anaa id", id);
        const res = await fetch(`${baseURL}/api/gigs/single/${id}`);
        const data = await res.json();
        // console.log("meeen", data);
        setSingleGig(data);
      } catch (err) {
        return err;
      }
    }
    fetchSingleGig();
  }, [id]);

  return (
    <>
      {singleGigData ? (
        <>
          <SingleGigContainer gig={singleGigData} />
          {!userData.isSeller && <Review gig={singleGigData} id={id} />}
        </>
      ) : (
        <p>Loading single gig...</p>
      )}
    </>
  );
}

export default SingleGig;
