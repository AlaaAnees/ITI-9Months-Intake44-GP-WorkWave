import { useParams } from "react-router";
import SingleGigContainer from "../../Components/SingleGig/SingleGigContainer";
import { useQuery } from "react-query";
const baseURL = "https://workwave-vq08.onrender.com/api";
function SingleGig() {
  const { id } = useParams();
  console.log(id);
  async function getSinglegig() {
    const res = await fetch(`${baseURL}/gigs/single/${id}`);
    return res.json();
  }

  const query = useQuery("getsinglegig", getSinglegig);
  console.log(query);
  return <>{<SingleGigContainer gig={query.data} status={query.status} />}</>;
}

export default SingleGig;
