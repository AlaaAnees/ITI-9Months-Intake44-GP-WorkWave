import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function AddToWishlist({ gig }) {
  const [colored, setColored] = useState(false);
  return (
    <div>
      <FaHeart
        className={`${colored ? "text-red-600" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setColored((c) => !c);
        }}
      />
    </div>
  );
}

export default AddToWishlist;
