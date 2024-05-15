import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

import AOS from 'aos';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';

const popularServicesData = [
  {
    title: "Logo Design",
    imgUrl: "/assets/imgs/unsplash_gxGtqG5ul2g.png",
  },
  {
    title: "WordPress",
    imgUrl: "/assets/imgs/2.png",
  },
  {
    title: "Graphic Design",
    imgUrl: "/assets/imgs/3.png",
  },
  {
    title: "Voice Over",
    imgUrl: "/assets/imgs/4.png",
  },
  {
    title: "Video Explainer",
    imgUrl: "/assets/imgs/5.png",
  },
];

const PopularServices = () => {
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
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-blue-50 pt-20  pb-20">
      <p
        className="sub-font-3 ps-14 text-3xl font-extrabold "
        data-aos="fade-right"
      >
        Popular Services
      </p>
      <div className="w-[90%] mx-auto mt-20">
        <Slider {...settings}>
          {popularServicesData.map((service, index) => (
            <div key={index}>
              <NavLink to={"/any"} data-aos="zoom-in-up">
                <div className="relative text-white hover:text-blue-400 transition-all duration-300">
                  <img
                    src={service.imgUrl}
                    alt={service.title}
                    className="w-full"
                  />
                  <div className="absolute   top-0 left-0 w-full h-full bg-black rounded-lg opacity-50 hover:opacity-70 transition-all duration-300"></div>
                  <p className="absolute top-1/2 text-center -translate-y-1/2  sub-font-3 font-semibold text-2xl w-full">
                    {service.title}
                  </p>
                </div>
              </NavLink>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularServices;
