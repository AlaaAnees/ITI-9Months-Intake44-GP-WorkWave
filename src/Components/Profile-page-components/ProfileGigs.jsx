import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const ProfileGigs = ({ sellerGigs }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  async function handleDeleteGig(id) {
    const res = await fetch(
      `https://gp-workwave-production.up.railway.app/api/gigs/delete/${id}`,
      {
        method: "Delete",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
  }
  // console.log(sellerGigs);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: sellerGigs.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: sellerGigs.length,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-20">
      <h2 className="font-bold sub-font-3 text-xl">My Gigs</h2>

      <div className="w-70 mx-auto mt-5">
        <Slider {...settings}>
          {sellerGigs.map((g) => (
            <NavLink
              to={`/singlegig/${g._id}`}
              key={g._id}
              className={`bg-white p-6 md:w-full w-[30%] rounded-xl flex flex-col justify-center  hover:-translate-y-1 transition-all duration-300`}
            >
              <img
                className="rounded-xl mb-5 w-[100%] h-[260px] object-cover  align-self-center "
                src={g.cover}
                alt=""
              />
              <div className="text-center">
                <p className="sub-font-3 font-bold text-[#385abfa9] -mt-3 mb-2 align-self-center">
                  {g.title}
                </p>
                <img
                  className="w-10 align-self-center mb-2 rounded-full mx-auto"
                  src={g.ownerImg}
                  alt=""
                />
                <p
                  className={`align-self-center text-[10px] font-semibold  sub-font-3 mb-2 text-[#385abfa9] px-3 py-1 rounded `}
                >
                  By {g.ownerName}
                </p>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="text-red-700  p-4"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteGig(g._id);
                  }}
                />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProfileGigs;
