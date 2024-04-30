import { useGig } from "../../Context/GigsContext";
import AddToWishlist from "../Wishlist/AddToWishlist";

function GigsContainer() {
  const { gigs } = useGig();
  console.log(gigs);
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-4 ">
      {gigs &&
        gigs.map((g) => (
          <li key={g._id}>
            <img src={g.cover} alt={g.title} height={100} />
            {/* second line */}
            <div>
              {/* gig owner need from back */}
              {/* rating */}
              <span>{g.totalStars}</span>
            </div>
            {/* third line */}
            <p>{g.title}</p>
            {/* forth line */}
            <div>
              <span>{g.price}$</span>
              <AddToWishlist></AddToWishlist>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default GigsContainer;
