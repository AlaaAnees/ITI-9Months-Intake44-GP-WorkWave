import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
function SingleGigContainer({ gig }) {
  const { userId, images, features } = gig;
  const [ownerData, setOwnerData] = useState("");

  console.log("aaaaaaaaaaaaaaaaaaa", gig);
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
  return (
    <>
      <div className="gig-title">{gig.title}</div>
      <div className="user-holder flex items-center gap-5">
        <div className="image-holder flex items-center">
          <img
            src={ownerData.img}
            alt={ownerData.username}
            className="w-10 rounded-full"
          />
          <div>{ownerData.username}</div>
        </div>
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
      {/* <div
        id="carouselExampleRide"
        className="carousel slide w-64"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image}
                className="d-block w-100 h-64"
                alt={`slide-${index}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      {/* Start GIG DISC */}
      <div className="gig-description">
        <h4>About This Gig</h4>
        <p>{gig.desc}</p>
      </div>
      {/* End  GIG DISC   */}
      {/* Start GIG Feature */}
      <div className="gig-feature">
        <h4>Package Inculde</h4>
        <ul>
          {features.map((feature) => (
            <li key={feature}>feature</li>
          ))}
        </ul>
      </div>
      {/* End  GIG Feature   */}
      {/* Start about the seller */}
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
          <button className="bg-blue-500 rounded py-2 px-4 text-white">
            Contact Me
          </button>
        </div>
      </div>
      {/* End about the seller */}
    </>
  );
}
export default SingleGigContainer;
