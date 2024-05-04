import { Link } from "react-router-dom";
import AddToWishlist from "../Wishlist/AddToWishlist";
import Rating from "../Rating/Rating";

function GigCard({ gig }) {
  console.log(" neeeeeeeeeeeeeeeeeew", gig);
  return (
    <Link to={`/singlegig/${gig._id}`}>
      <li
        key={gig._id}
        className="rounded-xl shadow-md bg-white hover:scale-105 transition-all "
      >
        <img src={gig.cover} alt={gig.title} className="w-100 h-72" />
        {/* second line */}
        <div className=" p-5">
          <div className="flex items-center justify-between flex-wrap   ">
            {/* gig owner need from back */}
            <div className="flex items-center justify-between  gap-3">
              <img
                src={gig.cover}
                alt={gig.title}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-md  text-stone-400 ">gig owner</span>
            </div>
            {/* rating */}
            <div className=" ">
              <Rating rate={gig.starNumber}></Rating>
            </div>
          </div>
          {/* third line */}
          <p className="font-semibold mt-3 text-xl capitalize">{gig.title}</p>
          {/* forth line */}
          <div className="flex items-center justify-between">
            <span className="font-medium text-lg text-[#595959]">
              $ {gig.price}
            </span>
            <AddToWishlist gig={gig}></AddToWishlist>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default GigCard;
