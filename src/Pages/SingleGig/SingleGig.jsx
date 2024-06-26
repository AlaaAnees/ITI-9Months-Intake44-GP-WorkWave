import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router";

import Review from "../../Components/Reviews/Review";
import SingleGigContainer from "../../Components/SingleGig/SingleGigContainer";

import Loading from "../Loading/Loading";

const baseURL = "https://gp-workwave-production.up.railway.app";
function SingleGig() {
  const { id } = useParams();
  const [singleGigData, setSingleGig] = useState("");

  useEffect(() => {
    async function fetchSingleGig() {
      try {
        const res = await fetch(`${baseURL}/api/gigs/single/${id}`);
        const data = await res.json();

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
          <Review gig={singleGigData} id={id} />
        </>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}

export default SingleGig;
