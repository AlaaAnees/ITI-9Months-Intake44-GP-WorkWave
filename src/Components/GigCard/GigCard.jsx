import { Link } from "react-router-dom";
import AddToWishlist from "../Wishlist/AddToWishlist";

function GigCard({ gig }) {
  return (
    <Link to={`/singlegig/${gig.userId}`}>
      <li key={gig._id}>
        <img src={gig.cover} alt={gig.title} height={100} />
        {/* second line */}
        <div>
          {/* gig owner need from back */}
          {/* rating */}
          <span>{gig.totalStars}</span>
        </div>
        {/* third line */}
        <p>{gig.title}</p>
        {/* forth line */}
        <div>
          <span>{gig.price}$</span>
          <AddToWishlist gig={gig}></AddToWishlist>
        </div>
      </li>
    </Link>
  );
}

export default GigCard;
