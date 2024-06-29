import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
function SingleGigContainer({ gig }) {
  const { userId, images, features } = gig;
  const [ownerData, setOwnerData] = useState("");
  const [isloading, setIsloading] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));
  async function handleAddtoOrder() {
    setIsloading(true);
    const res = await fetch(
      `https://workwave-vq08.onrender.com/api/orders/${gig._id}`,
      {
        method: "POST",
        body: JSON.stringify(gig),
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setIsloading(false);
  }
  useEffect(() => {
    async function fetchOwnerInfo() {
      try {
        const res = await fetch(
          `https://workwave-vq08.onrender.com/api/users/${userId}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setOwnerData(data.data.user);
      } catch (err) {
        return err;
      }
    }
    fetchOwnerInfo();
  }, [userId]);
  // return (
  //   <div className="grid  sm:grid-cols-2  container m-auto p-8 ">
  //     <div>
  //       <div className="gig-title font-bold text-2xl my-5">{gig.title}</div>
  //       <div className="user-holder flex items-center gap-8 my-4">
  //         <div className="image-holder flex items-center">
  //           <img
  //             src={ownerData.img}
  //             alt={ownerData.username}
  //             className="w-10 rounded-full me-3"
  //           />
  //           <div>{ownerData.username}</div>
  //         </div>
  //         <div>
  //           {!isNaN(gig.totalStars / gig.starNumber) && (
  //             <div className="stars flex items-center">
  //               {Array(Math.round(gig.totalStars / gig.starNumber))
  //                 .fill()
  //                 .map((item, i) => (
  //                   <FaStar key={i} className="text-yellow-400"></FaStar>
  //                 ))}
  //               <span>{Math.round(gig.totalStars / gig.starNumber)}</span>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //       {/* test */}
  //       <div>
  //         <img src={gig.cover} alt="" className="object-cover  h-48 w-96" />{" "}
  //       </div>
  //       {/* test */}
  //       {/* <div
  //       id="carouselExampleRide"
  //       className="carousel slide w-64"
  //       data-bs-ride="true"
  //     >
  //       <div className="carousel-inner">
  //         {images.map((image, index) => (
  //           <div
  //             key={index}
  //             className={`carousel-item ${index === 0 ? "active" : ""}`}
  //           >
  //             <img
  //               src={image}
  //               className="d-block w-100 h-64"
  //               alt={`slide-${index}`}
  //             />
  //           </div>
  //         ))}
  //       </div>
  //       <button
  //         className="carousel-control-prev"
  //         type="button"
  //         data-bs-target="#carouselExampleRide"
  //         data-bs-slide="prev"
  //       >
  //         <span
  //           className="carousel-control-prev-icon"
  //           aria-hidden="true"
  //         ></span>
  //         <span className="visually-hidden">Previous</span>
  //       </button>
  //       <button
  //         className="carousel-control-next"
  //         type="button"
  //         data-bs-target="#carouselExampleRide"
  //         data-bs-slide="next"
  //       >
  //         <span
  //           className="carousel-control-next-icon"
  //           aria-hidden="true"
  //         ></span>
  //         <span className="visually-hidden">Next</span>
  //       </button>
  //     </div> */}
  //       {/* Start GIG DISC */}
  //       <div className="gig-description">
  //         <h4 className="font-semibold text-lg my-3">About This Gig</h4>
  //         <p className="font-light text-sm">{gig.desc}</p>
  //       </div>
  //       {/* End  GIG DISC   */}
  //       {/* Start GIG Feature */}
  //       <div className="gig-feature">
  //         <h4 className="font-semibold text-lg my-3">Package Inculde</h4>
  //         <ul className="flex gap-4">
  //           {features.map((feature) => (
  //             <li
  //               key={feature}
  //               className="border border-blue-400 sub-font-2 text-xs py-1 block rounded-full w-[133px] text-center
  //                text-blue-400 "
  //             >
  //               {feature}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //       <button
  //         className="bg-blue-500 rounded py-2 px-4 text-white my-10 me-10 block ms-auto"
  //         onClick={handleAddtoOrder}
  //       >
  //         {isloading ? (
  //           <FontAwesomeIcon icon={faWaveSquare} className="fa-beat" />
  //         ) : (
  //           "addToCart"
  //         )}
  //       </button>
  //       {/* End  GIG Feature   */}
  //     </div>
  //     {/* Start about the seller */}
  //     <div className="user-holder flex items-center justify-center">
  //       <div className=" bg-white rounded-md p-7 flex items-center gap-5 ">
  //         <div className="image-holder flex items-center ">
  //           <img
  //             src={ownerData.img}
  //             alt={ownerData.username}
  //             className="w-10 rounded-full"
  //           />
  //         </div>
  //         <div className="holder space-y-2">
  //           <div>{ownerData.username}</div>
  //           <div>
  //             {!isNaN(gig.totalStars / gig.starNumber) && (
  //               <div className="stars flex items-center">
  //                 {Array(Math.round(gig.totalStars / gig.starNumber))
  //                   .fill()
  //                   .map((item, i) => (
  //                     <FaStar key={i} className="text-yellow-400"></FaStar>
  //                   ))}
  //                 <span>{Math.round(gig.totalStars / gig.starNumber)}</span>
  //               </div>
  //             )}
  //           </div>
  //           <button className="bg-blue-500 rounded py-2 px-4 text-white">
  //             Contact Me
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     {/* End about the seller */}
  //   </div>
  // );
  return (
    <div className="container mx-auto p-8 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <div className="font-bold text-2xl my-5 text-blue-400">
            {gig.title}
          </div>
          <div className="flex items-center gap-8 my-4">
            <div className="flex items-center">
              <img
                src={ownerData.img}
                alt={ownerData.username}
                className="w-10 rounded-full me-3"
              />
              <div>{ownerData.username}</div>
            </div>
            <div>
              {!isNaN(gig.totalStars / gig.starNumber) && (
                <div className="flex items-center">
                  {Array(Math.round(gig.totalStars / gig.starNumber))
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  <span className="ml-1">
                    {Math.round(gig.totalStars / gig.starNumber)}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div>
            <img
              src={gig.cover}
              alt=""
              className="object-cover h-80 w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="my-5">
            <h4 className="font-semibold text-lg text-blue-400">
              About This Gig
            </h4>
            <p className="font-light text-sm text-gray-700">{gig.desc}</p>
          </div>
          <div className="my-5">
            <h4 className="font-semibold text-lg text-blue-400">
              Package Includes
            </h4>
            <ul className="flex flex-wrap gap-4 mt-2">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="border border-blue-400 text-xs py-1 px-3 rounded-full text-blue-400 text-center"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <button
            className="bg-blue-500 rounded py-2 px-4 text-white my-10 me-10 block ms-auto hover:bg-blue-600 transition"
            onClick={handleAddtoOrder}
          >
            {isloading ? (
              <FontAwesomeIcon icon={faWaveSquare} className="fa-beat" />
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white rounded-md p-7 flex items-center gap-5 shadow-lg">
            <img
              src={ownerData.img}
              alt={ownerData.username}
              className="w-16 rounded-full"
            />
            <div className="space-y-2">
              <div className="text-lg font-semibold text-gray-800">
                {ownerData.username}
              </div>
              <div>
                {!isNaN(gig.totalStars / gig.starNumber) && (
                  <div className="flex items-center">
                    {Array(Math.round(gig.totalStars / gig.starNumber))
                      .fill()
                      .map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    <span className="ml-1">
                      {Math.round(gig.totalStars / gig.starNumber)}
                    </span>
                  </div>
                )}
              </div>
              <button className="bg-blue-500 rounded py-2 px-4 text-white hover:bg-blue-600 transition">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleGigContainer;
