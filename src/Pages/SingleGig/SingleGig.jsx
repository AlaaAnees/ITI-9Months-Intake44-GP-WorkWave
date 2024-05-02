import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleGigContainer from "../../Components/SingleGig/SingleGigContainer";
const baseURL = "https://workwave-vq08.onrender.com/api";
function SingleGig() {
  const { id } = useParams();
  const [singleGigData, setSingleGig] = useState("");
  useEffect(() => {
    async function fetchSingleGig() {
      const res = await fetch(`${baseURL}/gigs/single/${id}`);
      const data = await res.json();
      setSingleGig(data);
    }
    fetchSingleGig();
  }, []);
  return (
    <>
      <SingleGigContainer gig={singleGigData} />
    </>
  );
}

export default SingleGig;
