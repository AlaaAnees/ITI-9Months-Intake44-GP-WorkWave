import { FaStar } from "react-icons/fa";
import { SlDislike, SlLike } from "react-icons/sl";

const OneReview = () => {
  return (
    <>
      <div className="flex items-start gap-3 py-3 border-b-2 border-[#D7D7D7]">
        <img
          src="../../../public/assets/imgs/profile-default-icon-2048x2045-u3j7s5nj.png"
          alt=""
          className="w-11 h-11 rounded-full"
        />
        <div className="">
          <p className="m-0 sub-font-2 font-bold">Adianan Silva</p>
          <p className="m-0 sub-font-2 text-[#898989] ">United States</p>
          <div className="flex my-2 text-[#FFB340]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-[#595959] sub-font-2">
            Working with Ahmed was a great experience. He is very professional
            and creative. I will definitely work with him again.
          </p>
          <p className="flex items-center gap-2 text-[#595959] font-semibold sub-font-2">
            Helpful? <SlLike /> Yes <SlDislike /> No
          </p>
        </div>
      </div>
    </>
  );
};

export default OneReview;
