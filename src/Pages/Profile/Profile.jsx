import { useContext, useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoIosChatbubbles } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Gigs from "../../Components/Profile-page-components/ProfileGigs";

import { AuthContext } from "../../Context/authContext";

function Profile() {
  const [isloading, setisloading] = useState(false);
  const [sellerGigs, setSellerGigs] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const { userData, setUserData } = useContext(AuthContext);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUserData(null);
    setToken(null);
  };

  const starArray = Array.from({ length: 5 }, (value, index) => (
    <FaStar key={index} className="text-[#FFB340]" />
  ));
  async function handleDeleteaccount() {
    setisloading(true);
    const res = await fetch(
      `https://gp-workwave-production.up.railway.app/api/users/delete/${userData._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    setisloading(false);
    // console.log(data);
    handleLogOut();
    navigate("/");
  }
  useEffect(() => {
    async function GetALLSellerGigs() {
      if (userData.isSeller) {
        const res = await fetch(
          `https://gp-workwave-production.up.railway.app/api/gigs/${userData._id}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        setSellerGigs(data.data.gigs);
      }
    }
    GetALLSellerGigs();
  }, []);

  return (
    <div className="bg-blue-50 px-16 py-8">
      <p className="text-[#595959] text-right">
        <span
          className="bg-red-500  p-3 rounded-md text-white my-2 cursor-pointer"
          onClick={handleDeleteaccount}
        >
          {isloading ? (
            <FontAwesomeIcon icon={faWaveSquare} className="fa-beat" />
          ) : (
            " Delete account"
          )}
        </span>
      </p>

      <div className="flex justify-between mt-10">
        <div className="md:w-[70%]">
          <div className="flex gap-8 items-center">
            <img
              className="w-36 h-36 rounded-full"
              src={userData.img}
              alt="profile-pic"
            />
            <div className="">
              <p className=" text-[#AFAEC3] text-[23px] mb-0 sub-font-2">
                {userData.username}
              </p>
              <p className="text-[#868686] text-sm  sub-font-3  md:hidden">
                Offline. 10:58 Am
              </p>
              <p className="flex gap-1 m-0 items-center text-[#FFB340] sub-font-2">
                {starArray} {starArray.length}
              </p>
              <p className="flex gap-1 items-center mt-3">
                <GrLocation />
                <span className="sub-font-2 font-medium text-[#595959] text-sm ">
                  {userData.country}
                </span>
              </p>
              <p className="md:hidden text-white m-0 mt-3 bg-blue-300 hover:bg-blue-500 justify-center cursor-pointer transition-all duration-300  gap-1 text-[12px]  flex items-center text-center rounded-lg  p-2  sub-font-3">
                <IoIosChatbubbles />
                Contact Me
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="font-bold sub-font-3 text-xl">About me</h2>
            <p className="text-[#595959] mt-3 font-medium sub-font-3">
              {userData.desc ||
                userData.username + " not added any description"}
              {/* You have come to the right place. With a problem-solving mindset,
              I help my clients to create designs that are aesthetically
              pleasing, technically refined, and easy to use. I had worked with
              big Real Estate Companies, E-commerce, Beauty, Fashion, Food
              Delivery, Medical, Appointment booking, Shipping companies, and
              other service-providing companies. */}
            </p>
          </div>
          <div className="mt-10">
            <h2 className="font-bold sub-font-3 text-xl">Skills</h2>
            <div className="flex gap-2">
              {userData.skills && userData.skills.length > 0 ? (
                userData.skills.map((skill) => (
                  <span
                    className="border-[#424242] text-[#424242] border-2 px-3 rounded-full"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-lg text-[#424242]  px-3">
                  No skills added yet.
                </span>
              )}
            </div>
          </div>
        </div>
        {/* <div className="hidden md:block  bg-white shadow-md rounded-lg h-fit p-4">
          <div className="flex items-center gap-3">
            <img
              src={`${userData.img}`}
              alt="profile img"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="text-[#AFAEC3] m-0 text-lg font-medium sub-font-3">
                {userData.username}
              </p>
              <p className="text-[#868686] text-sm  sub-font-3">
                Offline. 10:58 Am
              </p>
            </div>
          </div>
          <p className="text-white m-0 mt-3 bg-blue-300 hover:bg-blue-500 cursor-pointer transition-all duration-300  gap-1 md:text-xs lg:text-lg  flex items-center rounded-lg justify-center  p-2 text-center sub-font-3">
            <MdCall />
            Contact Me
          </p>
        </div> */}
      </div>

      {sellerGigs.length > 0 ? (
        <Gigs sellerGigs={sellerGigs} />
      ) : (
        userData.isSeller && (
          <div className="text-center mt-16">
            <Link
              to={"/newGig"}
              className="bg-[#60A5FA] p-3 rounded-md text-white my-2"
            >
              Create new gig
            </Link>
          </div>
        )
      )}
      {/* <ProfileReviews /> */}
    </div>
  );
}

export default Profile;
