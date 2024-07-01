import React, { useEffect, useState } from "react";
import { useContext } from "react";

import { FaStar } from "react-icons/fa";

import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/authContext";

function SingleGigContainer({ gig }) {
  const { userId, images, features } = gig;
  const [ownerData, setOwnerData] = useState("");
  const [isloading, setIsloading] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const sellerId = ownerData._id;
  const buyerId = currentUser._id;

  const { userData } = useContext(AuthContext);

  async function handleAddtoOrder() {
    setIsloading(true);
    const res = await fetch(
      `https://gp-workwave-production.up.railway.app/api/orders/${gig._id}`,
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
    console.log("data****************", data);
    setIsloading(false);
  }

  useEffect(() => {
    async function fetchOwnerInfo() {
      try {
        const res = await fetch(
          `https://gp-workwave-production.up.railway.app/api/users/${userId}`,
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

  return (
    <div className=" mx-auto p-8 bg-gray-50">
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="md:ps-20">
          <div className="font-bold sub-font text-2xl my-5 text-blue-400">
            {gig.title}
          </div>
          <div className="flex items-center gap-8 my-4">
            <div className="flex items-center">
              <img
                src={ownerData.img}
                alt={ownerData.username}
                className="w-10  rounded-full me-3"
              />
              <div className="main-font font-semibold">
                {ownerData.username}
              </div>
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
              className="object-cover h-48 w-full md:w-1/2 rounded-lg shadow-lg"
            />
          </div>
          <div className="my-5">
            <h4 className="font-semibold text-lg text-blue-400 sub-font-2">
              About This Gig
            </h4>
            <p className="font-light text-sm text-gray-700 mx-4 sub-font-3">
              {gig.desc}
            </p>
          </div>
          <div className="my-5">
            <h4 className="font-semibold text-lg text-blue-400 sub-font-2">
              Package Includes
            </h4>
            <ul className="flex flex-wrap gap-4 mt-2">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="border border-blue-400 text-xs mx-4 py-1 px-3 rounded-full text-blue-400 text-center sub-font-3"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          {userData && (
            <button
              className="bg-blue-500 rounded py-2 px-4 text-white mt-10  block hover:bg-blue-600 transition"
              onClick={handleAddtoOrder}
            >
              {isloading ? (
                <FontAwesomeIcon icon={faWaveSquare} className="fa-beat" />
              ) : (
                "Add to Cart"
              )}
            </button>
          )}
        </div>
        <div className="flex items-start justify-center mt-10">
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
                <Contact IDs={{ sellerId: sellerId, buyerId: buyerId }} />
              </button>
              {/*  {userData && (
                <Link
                  to={`/message/${userId}${userData?._id}`}
                  className="bg-blue-500 rounded py-2 px-4 text-white hover:bg-blue-600 transition"
                >
                  Contact Me
                </Link>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleGigContainer;
