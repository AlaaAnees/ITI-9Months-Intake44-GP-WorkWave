import 'aos/dist/aos.css';

import { useEffect } from 'react';

import AOS from 'aos';

const JoinWorkWave = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });
  });
  return (
    <div className="bg-blue-50 pb-20" data-aos="flip-up">
      <div className="bg-blue-950 flex justify-center lg:justify-between px-10 lg:px-24 items-center w-[90%] mx-auto">
        <div className="space-y-14 text-center lg:text-left py-5 lg:py-0">
          <h2 className="text-white sub-font text-4xl">
            Your go-to for freelance talent,
            <br /> just a tap away!
          </h2>
          <button className="sub-font-3 bg-white py-2 px-3 text-[20px] font-bold rounded-lg text-blue-950 hover:bg-blue-950 hover:border border-white hover:text-white transition-all duration-300">
            Join WorkWave
          </button>
        </div>
        <div className="hidden lg:block">
          <div className=" md:flex gap-1 ">
            <img src="/assets/imgs/Shapes.png" alt="" />
            <img src="/assets/imgs/Shapes.png" alt="" />
            <img src="/assets/imgs/Shapes.png" alt="" />
          </div>
          <div className="my-5">
            <img
              src="/assets/imgs/workwave-high-resolution-logo-white-transparent 2.png"
              alt=""
            />
          </div>
          <div className=" md:flex gap-1">
            <img src="/assets/imgs/Shapes.png" alt="" />
            <img src="/assets/imgs/Shapes.png" alt="" />
            <img src="/assets/imgs/Shapes.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWorkWave;
