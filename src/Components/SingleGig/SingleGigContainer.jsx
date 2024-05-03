import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
function SingleGigContainer({ gig, status }) {
  // const { userId } = gig;
  // const [ownerData, setOwnerData] = useState("");
  // useEffect(() => {
  //   async function fetchOwnerInfo() {
  //     const res = await fetch(
  //       `https://workwave-vq08.onrender.com/api/users/${userId}`
  //     );
  //     const data = await res.json();
  //     setOwnerData(data.data.user);
  //   }
  //   fetchOwnerInfo();
  // }, [userId]);
  return (
    <>
      {/* <div className="gig-title">{gig.title}</div>{" "}
      <div className="flex items-center gap-5">
        {" "}
        <div className="image-holder">
          <img
            src={ownerData.img}
            alt={ownerData.username}
            className="w-10 rounded-full"
          />
          <div>{ownerData.username}</div>{" "}
        </div>{" "}
      </div> */}
    </>
    // <>
    //   {/* Title */}
    //   <div className="gig-title">{gig.title}</div>
    //   {/* Image && Stars */}
    //   <div className="flex items-center gap-5">
    //     <div className="image-holder">
    //       <div>Ebrahim</div>
    //     </div>

    //     {!isNaN(gig.totalStars / gig.starNumber) && (
    //       <div className="stars flex items-center">
    //         {Array(Math.round(gig.totalStars / gig.starNumber))
    //           .fill()
    //           .map((item, i) => (
    //             <FaStar key={i} className="text-yellow-400"></FaStar>
    //           ))}
    //         <span className="mx-2">
    //           {Math.round(gig.totalStars / gig.starNumber)}
    //         </span>
    //       </div>
    //     )}
    //   </div>
    //   {/* Description */}
    //   <div className="desc">
    //     <h4>About This Gig</h4>
    //     <p>{gig.desc}</p>
    //     <h4>Features</h4>
    //     <ul>
    //       {gig.features.map((feature) => (
    //         <li key={gig._id}>{feature}</li>
    //       ))}
    //     </ul>
    //   </div>
    // </>
  );
}

export default SingleGigContainer;
