import { FaRegCheckCircle } from "react-icons/fa";

const BestPart = () => {
  return (
    <div className="w-full bg-blue-100 flex flex-col lg:flex-row justify-between overflow-hidden">
      <div className="w-full lg:w-[35%] pt-[50px] pe-4 ps-14">
        <p className="font-bold text-4xl text-[#3B3B3B] sub-font-3 mb-5">
          The best part? Everything.
        </p>
        <div className="mb-3">
          <p className="font-bold flex items-center text-[20px] text-[#3B3B3B] sub-font-3">
            <FaRegCheckCircle className="me-2" /> Stick to your budget.
          </p>
          <span className="text-[#595959]">
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </span>
        </div>
        <div className="mb-3">
          <p className="font-bold flex items-center text-[20px] text-[#3B3B3B] sub-font-3">
            <FaRegCheckCircle className="me-2" /> Get quality work done quickly.
          </p>
          <span className="text-[#595959]">
            Hand your project over to a talented freelancer in minutes, get
            long-lasting results.
          </span>
        </div>
        <div className="mb-3">
          <p className="font-bold text-[20px] flex items-center text-[#3B3B3B] sub-font-3">
            <FaRegCheckCircle className="me-2" /> Pay when you&apos;re happy.
          </p>
          <span className="text-[#595959]">
            Upfront quotes mean no surprises. Payments only get released when
            you approve.
          </span>
        </div>
        <div className="mb-3">
          <p className="font-bold text-[20px] flex items-center text-[#3B3B3B] sub-font-3">
            <FaRegCheckCircle className="me-2" /> Count on 24/7 support.
          </p>
          <span className="text-[#595959]">
            Our round-the-clock support team is available to help anytime,
            anywhere.
          </span>
        </div>
      </div>
      <div className="hidden lg:flex flex-wrap gap-5 w-full lg:w-1/2 py-[50px] ">
        <img
          className="xl:w-[280px] lg:w-[220px] h-[200px]"
          src="/assets/imgs/Rectangle 31.png"
          alt=""
        />
        <img
          className="xl:w-[280px] lg:w-[220px] h-[200px]"
          src="/assets/imgs/Rectangle 32.png"
          alt=""
        />
        <img
          className="xl:w-[280px] lg:w-[220px] h-[200px]"
          src="/assets/imgs/Rectangle 33.png"
          alt=""
        />
        <img
          className="xl:w-[280px] lg:w-[220px] h-[200px]"
          src="/assets/imgs/Rectangle 34.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default BestPart;
