/* import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const baseURL = "https://gp-workwave-production.up.railway.app/api";

import ReactStars from "react-rating-stars-component";

function Review({ gig }) {
  const { reviews } = gig;
  const [newReview, setNewReview] = useState("");
  const [desc, setDesc] = useState("");
  const [star, setStars] = useState(0);
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
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
    // console.log("dataaaaaaaaa", data);
    setNewReview(data.data?.savedReview);
  }
  return (
    <div className="container m-auto p-8">
      {reviews ? (
        reviews.map((rev) => {
          return (
            <div
              className="reviews  p-4 border-b-[.5px] border-b-slate-400 "
              key={rev.userId}
            >
              <div className="user-holder flex items-center gap-5">
                <div className="image-holder flex items-center">
                  <img
                    src={rev.img}
                    alt={rev.username}
                    className="w-10 rounded-full"
                  />
                </div>
                <div className="holder space-y-2">
                  <div className="font-semibold text-lg text-blue-400">
                    {rev.username}
                  </div>
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
        <div
          className="reviews p-4 border-b-[.5px] border-b-slate-400 "
          key={newReview.userId}
        >
          <div className="user-holder flex items-center gap-5">
            <div className="image-holder flex items-center">
              <img
                src={newReview.img}
                alt={newReview.username}
                className="w-10 rounded-full"
              />
            </div>
            <div className="holder space-y-2">
              <div className="font-semibold text-lg text-blue-400">
                {newReview.username}
              </div>
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
      <div className="add-review mt-8 flex flex-col gap-4 md:w-1/2">
        <textarea
          rows="4"
          className="w-full  p-2"
          placeholder="Review"
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className="self-end flex flex-col items-center">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={28}
            isHalf={false}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#FFB340"
            classNames="mx-auto"
          />
          <button
            className="bg-blue-500   rounded py-2 px-4 text-white block ms-auto hover:bg-blue-600 transition-all self-end"
            onClick={handlePostReview}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
 */

import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/authContext";

const baseURL = "https://gp-workwave-production.up.railway.app/api";

function Review({ gig }) {
  const { reviews } = gig;
  const [newReview, setNewReview] = useState("");
  const [desc, setDesc] = useState("");
  const [star, setStars] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { userData } = useContext(AuthContext);

  async function handlePostReview() {
    setNewReview("");
    const token = JSON.parse(localStorage.getItem("token"));
    const reviewData = {
      gigId: gig._id,
      desc,
      star: parseInt(star),
    };
    setIsLoading(true);
    const res = await fetch(`${baseURL}/reviews`, {
      method: "POST",
      body: JSON.stringify(reviewData),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setIsLoading(false);
    // console.log("dataaaaaaaaa", data);
    setNewReview(data.data?.savedReview);
  }

  return (
    <div className="container m-auto p-8">
      {reviews ? (
        reviews.map((rev) => {
          return (
            <div
              className="reviews p-4 border-b-[.5px] border-b-slate-400"
              key={rev.userId}
            >
              <div className="user-holder flex items-center gap-5">
                <div className="image-holder flex items-center">
                  <img
                    src={rev.img}
                    alt={rev.username}
                    className="w-10 rounded-full"
                  />
                </div>
                <div className="holder space-y-2">
                  <div className="font-semibold text-lg text-blue-400">
                    {rev.username}
                  </div>
                  <div>
                    {!isNaN(rev.star) && (
                      <div className="stars flex items-center">
                        {Array(Math.round(rev.star))
                          .fill()
                          .map((item, i) => (
                            <FaStar key={i} className="text-yellow-400" />
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
        <div
          className="reviews p-4 border-b-[.5px] border-b-slate-400"
          key={newReview.userId}
        >
          <div className="user-holder flex items-center gap-5">
            <div className="image-holder flex items-center">
              <img
                src={newReview.img}
                alt={newReview.username}
                className="w-10 rounded-full"
              />
            </div>
            <div className="holder space-y-2">
              <div className="font-semibold text-lg text-blue-400">
                {newReview.username}
              </div>
              <div>
                {!isNaN(newReview.star) && (
                  <div className="stars flex items-center">
                    {Array(Math.round(newReview.star))
                      .fill()
                      .map((item, i) => (
                        <FaStar key={i} className="text-yellow-400" />
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
      {!userData.isAdmin && !userData.isSeller && (
        <div className="add-review mt-8 flex flex-col gap-4">
          <textarea
            className="resize-none p-4 rounded-md"
            placeholder="Review"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            className="p-2 rounded-md"
            type="number"
            name="star"
            min={0}
            max={5}
            value={star}
            onChange={(e) => setStars(e.target.value)}
          />
          <button
            className="bg-blue-500 rounded py-2 px-4 text-white"
            onClick={handlePostReview}
          >
            {isLoading ? (
              <FontAwesomeIcon icon={faWaveSquare} className="fa-beat" />
            ) : (
              "Submit Review"
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;
