import { NavLink } from "react-router-dom";
import Slider from "react-slick";

// const data = [
//   {
//     tilte: "Web & Mobile Design",
//     imgUrl: "/assets/imgs/original-e2afaa7e849dc5b57dc3a299942ddcaf.png",
//     creator: "Akram",
//     creatorAvatar: "/assets/imgs/Ellipse 6 (1).png",
//     bg: "bg-gradient-to-b from-blue-300 to-blue-800",
//     creatorBg: "bg-[#3859BF]",
//   },
//   {
//     tilte: "Logo Design",
//     imgUrl: "/assets/imgs/61f024b62c3343182aa3917e_Logo Design.jpeg",
//     creator: "Ebrahim",
//     creatorAvatar: "/assets/imgs/Ellipse 6.png",
//     bg: "bg-gradient-to-b from-[#1F1F1F] to-[#292929]",
//     creatorBg: "bg-[#373737]",
//   },
//   {
//     tilte: "Social Media Design",
//     imgUrl: "/assets/imgs/dfa773100969187.5f14a5d4581fe.jpg",
//     creator: "Mahmoud",
//     creatorAvatar: "/assets/imgs/Ellipse 6 (2).png",
//     bg: "bg-gradient-to-b from-blue-300 to-blue-800",
//     creatorBg: "bg-[#3859BF]",
//   },
//   {
//     tilte: "Animated GIFs",
//     imgUrl: "/assets/imgs/19.jpeg",
//     creator: "Alaa",
//     creatorAvatar: "/assets/imgs/Ellipse 6 (3).png",
//     bg: "bg-gradient-to-b from-[#1F1F1F] to-[#292929]",
//     creatorBg: "bg-[#373737]",
//   },
//   {
//     tilte: "Graphic Design",
//     imgUrl: "/assets/imgs/jpeg-optimizer_14-1.jpg",
//     creator: "Eman",
//     creatorAvatar: "/assets/imgs/Ellipse 6 (3).png",
//     bg: "bg-gradient-to-b from-blue-300 to-blue-800",
//     creatorBg: "bg-[#3859BF]",
//   },
// ];
const ProfileGigs = ({ sellerGigs }) => {
  console.log(sellerGigs);
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
          slidesToShow: 3,
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

      <div className="w-[90%] mx-auto mt-5">
        <Slider {...settings}>
          {sellerGigs.map((g, index) => (
            <NavLink
              to={`/singlegig/${g._id}`}
              key={g._id}
              className={`bg-[#385abfa9] rounded-xl flex  flex-col justify-center  hover:-translate-y-1 transition-all duration-300`}
            >
              <img
                className="rounded-xl mb-5 w-[100%] h-[260px] object-cover  align-self-center "
                src={g.cover}
                alt=""
              />
              <div className="text-center">
                <p className="sub-font-3 font-bold text-white -mt-3 mb-2 align-self-center">
                  {g.title}
                </p>
                <img
                  className="w-10 align-self-center mb-2 rounded-full mx-auto"
                  src={g.ownerImg}
                  alt=""
                />
                <p
                  className={`align-self-center text-[10px] font-semibold  sub-font-3 mb-2 text-white px-3 py-1 rounded `}
                >
                  By {g.ownerName}
                </p>
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProfileGigs;
