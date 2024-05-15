import { useState } from "react";

import ReactStars from "react-rating-stars-component";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className="flex flex-col mt-10">
      <h2 className="font-bold sub-font-3 text-xl">Add Review</h2>
      <textarea
        rows="4"
        className="w-full  p-2"
        placeholder="Review"
      ></textarea>
      <div className="align-self-end">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={28}
          isHalf={false}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#FFB340"
        />
        <button
          className="bg-blue-400 hover:bg-blue-500 transition-all duration-300 font-semibold text-white rounded-md sub-font-3 w-full py-1"
          onClick={() => console.log(rating)}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AddReview;
