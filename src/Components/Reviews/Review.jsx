import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const baseURL = "https://workwave-vq08.onrender.com/api";
function Review({ gig, id }) {
  const { userId } = gig;
  const [ownerData, setOwnerData] = useState("");
  const [reviews, setReview] = useState("");
  useEffect(() => {
    async function fetchOwnerInfo() {
      try {
        const res = await fetch(
          `https://workwave-vq08.onrender.com/api/users/${userId}`
        );
        const data = await res.json();
        setOwnerData(data.data.user);
      } catch (err) {
        return err;
      }
    }
    fetchOwnerInfo();
  }, [userId]);

  useEffect(() => {
    async function fetchReviews() {
      const res = await fetch(`${baseURL}/reviews/${id}`);
      const data = await res.json();
      setReview(data);
    }
    fetchReviews();
  }, [id]);

  return (
    <>
      {reviews ? (
        <div className="reviews">
          <div className="user-holder flex items-center gap-5">
            <div className="image-holder flex items-center">
              <img
                src={ownerData.img}
                alt={ownerData.username}
                className="w-10 rounded-full"
              />
            </div>
            <div className="holder space-y-2">
              <div>{ownerData.username}</div>
              <div>
                {!isNaN(gig.totalStars / gig.starNumber) && (
                  <div className="stars flex items-center">
                    {Array(Math.round(gig.totalStars / gig.starNumber))
                      .fill()
                      .map((item, i) => (
                        <FaStar key={i} className="text-yellow-400"></FaStar>
                      ))}
                    <span>{Math.round(gig.totalStars / gig.starNumber)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Reviews Is Loading</div>
      )}
    </>
  );
}

export default Review;
