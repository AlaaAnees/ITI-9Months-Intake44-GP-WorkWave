import { MdErrorOutline } from 'react-icons/md';

const NotSeller = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-52 md:mt-28 lg:mt-24 ">
      <div>
        <MdErrorOutline className="text-[150px] md:text-[250px] font-light text-blue-500" />
      </div>
      <p className="sub-font text-blue-500 text-lg md:text-2xl text-center">
        Sorry , You Can Not View This Page Because You Are Not Seller
      </p>
    </div>
  );
};

export default NotSeller;
