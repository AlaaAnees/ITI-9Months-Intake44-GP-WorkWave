import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleGigContainer from "../../Components/SingleGig/SingleGigContainer";
const baseURL = "https://workwave-vq08.onrender.com";
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
        <SingleGigContainer gig={singleGigData} />
      ) : (
        <p>Loading single gig...</p>
      )}
    </>
  );
}

export default SingleGig;
