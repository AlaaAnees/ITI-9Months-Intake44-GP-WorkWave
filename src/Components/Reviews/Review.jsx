import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const baseURL = "https://workwave-vq08.onrender.com/api";
function Review({ gig }) {
  const { reviews } = gig;
  const [newReview, setNewReview] = useState("");
  const [desc, setDesc] = useState("");
  const [star, setStars] = useState(0);
  async function handlePostReview() {
    setNewReview("");
    const token = JSON.parse(localStorage.getItem("token"));
    const newReview = {
      gigId: gig._id,
      desc,
      star: parseInt(star),
    };
    const res = await fetch(`${baseURL}/reviews`, {
      method: "POST",
      body: JSON.stringify(newReview),
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("dataaaaaaaaa", data);
    setNewReview(data.data?.savedReview);
  }
  return (
    <>
      {reviews ? (
        reviews.map((rev) => {
          return (
            <div className="reviews" key={rev.userId}>
              <div className="user-holder flex items-center gap-5">
                <div className="image-holder flex items-center">
                  <img
                    src={rev.img}
                    alt={rev.username}
                    className="w-10 rounded-full"
                  />
                </div>
                <div className="holder space-y-2">
                  <div>{rev.username}</div>
                  <div>
                    {!isNaN(rev.star) && (
                      <div className="stars flex items-center">
                        {Array(Math.round(rev.star))
                          .fill()
                          .map((item, i) => (
                            <FaStar
                              key={i}
                              className="text-yellow-400"
                            ></FaStar>
                          ))}
                        <span>{Math.round(rev.star)}</span>
                      </div>
                    )}
                  </div>
                  <p>{rev.desc}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>Reviews Is Loading</div>
      )}
      {newReview && (
        <div className="reviews" key={newReview.userId}>
          <div className="user-holder flex items-center gap-5">
            <div className="image-holder flex items-center">
              <img
                src={newReview.img}
                alt={newReview.username}
                className="w-10 rounded-full"
              />
            </div>
            <div className="holder space-y-2">
              <div>{newReview.username}</div>
              <div>
                {!isNaN(newReview.star) && (
                  <div className="stars flex items-center">
                    {Array(Math.round(newReview.star))
                      .fill()
                      .map((item, i) => (
                        <FaStar key={i} className="text-yellow-400"></FaStar>
                      ))}
                    <span>{Math.round(newReview.star)}</span>
                  </div>
                )}
              </div>
              <p>{newReview.desc}</p>
            </div>
          </div>
        </div>
      )}
      <div className="add-review">
        <textarea
          className="resize-none"
          placeholder="Review"
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="number"
          name="star"
          min={0}
          max={5}
          value={star}
          onChange={(e) => setStars(e.target.value)}
        />
        <button onClick={handlePostReview}>Submit Review</button>
      </div>
    </>
  );
}

export default Review;
