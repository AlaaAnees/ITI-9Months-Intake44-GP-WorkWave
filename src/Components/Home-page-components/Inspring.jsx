import "aos/dist/aos.css";

import { useEffect } from "react";

import AOS from "aos";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const inspringData = [
  {
    tilte: "Web & Mobile Design",
    imgUrl: "./assets/imgs/original-e2afaa7e849dc5b57dc3a299942ddcaf.png",
    creator: "Aisha",
    creatorAvatar: "/assets/imgs/Ellipse 6 (1).png",
    bg: "bg-gradient-to-b from-blue-300 to-blue-800",
    creatorBg: "bg-[#3859BF]",
    id: "667b4c3001d8783dddf054b3",
  },
  {
    tilte: "Logo Design",
    imgUrl: "./assets/imgs/61f024b62c3343182aa3917e_Logo Design.jpeg",
    creator: "AlaaSeller15",
    creatorAvatar: "./assets/imgs/Ellipse 6.png",
    bg: "bg-gradient-to-b from-[#1F1F1F] to-[#292929]",
    creatorBg: "bg-[#373737]",
    id: "6681e02f7b080c7bf0f9e674",
  },
  {
    tilte: "Writing & Translation",
    imgUrl: "./assets/imgs/dfa773100969187.5f14a5d4581fe.jpg",
    creator: "Mahmoud",
    creatorAvatar: "./assets/imgs/Ellipse 6 (2).png",
    bg: "bg-gradient-to-b from-blue-300 to-blue-800",
    creatorBg: "bg-[#3859BF]",
    id: "667b464a01d8783dddf0382d",
  },
  {
    tilte: "Photography",
    imgUrl: "./assets/imgs/19.jpeg",
    creator: "Aisha",
    creatorAvatar: "./assets/imgs/Ellipse 6 (3).png",
    bg: "bg-gradient-to-b from-[#1F1F1F] to-[#292929]",
    creatorBg: "bg-[#373737]",
    id: "667b57b701d8783dddf063f5",
  },
  {
    tilte: "Graphic Design",
    imgUrl: "/assets/imgs/jpeg-optimizer_14-1.jpg",
    creator: "Ezz",
    creatorAvatar: "./assets/imgs/Ellipse 6 (3).png",
    bg: "bg-gradient-to-b from-blue-300 to-blue-800",
    creatorBg: "bg-[#3859BF]",
    id: "667b50f301d8783dddf05dba",
  },
];
const Inspring = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });
  });
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-blue-50 pt-20 pb-20" data-aos="fade-up">
      <p className="sub-font-3 ps-14 text-3xl font-extrabold ">Inspring Work</p>
      <div className="w-[90%] mx-auto mt-20">
        <Slider {...settings}>
          {inspringData.map((item, index) => (
            <NavLink
              to={`/singlegig/${item.id}`}
              key={index}
              className={`${item.bg} rounded-xl flex  flex-col justify-center text-center  hover:-translate-y-1 transition-all duration-300`}
            >
              <img
                className="p-3 mb-1 w-[95%] mx-auto h-[260px] object-cover rounded-3xl align-self-center"
                src={item.imgUrl}
                alt=""
              />
              <p className="sub-font-3 font-bold text-white mx-auto  -mt-3 mb-2 align-self-center">
                {item.tilte}
              </p>
              <img
                className="w-10 align-self-center mx-auto mb-2"
                src={item.creatorAvatar}
                alt=""
              />
              <p
                className={`align-self-center text-[10px] font-semibold  sub-font-3 mb-2 text-white px-3 py-1 rounded-md ${item.creatorBg}`}
              >
                By {item.creator}
              </p>
            </NavLink>
          ))}
        </Slider>
      </div>
      {/* <div className="bg-gradient-to-b from-blue-300 to-blue-800 rounded-xl flex flex-col justify-center w-fit">
        <img
          className="p-3 mb-1 w-[200px] h-[180px] object-cover rounded-3xl"
          src={inspringData[0].imgUrl}
          alt=""
        />
        <p className="sub-font-3 font-bold text-white -mt-3 align-self-center">
          {inspringData[0].tilte}
        </p>
        <img
          className="w-10 align-self-center mb-2"
          src={inspringData[0].creatorAvatar}
          alt=""
        />
        <p className="align-self-center text-[10px] font-semibold  sub-font-3 mb-2 text-white px-3 py-1 rounded-md bg-[#3859BF]">
          By {inspringData[0].creator}
        </p>
      </div> */}
    </div>
  );
};

export default Inspring;
