import Contact from "../../Components/Contact/Contact";
import Paypal from "../../Components/Payment/Payment";

const Explore = () => {
  let ids = {
    sellerId: "662e9693e3b98a3c9b42c581",
    buyerId: "6643b8a0773f42b4c6612dab",
  };

  // const conversationId = "662e9693e3b98a3c9b42c581662ea6c6d385235bd12335ca";
  let letter =
    "lormjlj lls joje m dkjlow ld joiu abdelaziz  hlajor lhekle dl joijwo jdd mahmoud";
  return (
    <>
      <div className="parent h-screen">
        <div className="container mx-auto">
          <div className=" text-slate-700 py-3 sm:p-0 w-[80%] mx-auto flex flex-col sm:flex-row sm:justify-around justify-between gap-2 sm:gap-0 items-center my-5 bg-white rounded-lg shadow-md shadow-slate-200">
            <div className="image w-[80px] sm:w-[40px]">
              <img
                className="w-full rounded-lg"
                src="assets/avatar.jpg"
                alt=""
              />
            </div>
            <h3 className="font-semibold">{letter.slice(0, 40)}</h3>
            <h3 className="font-semibold">price: 20$</h3>
            <div className="relative start-0 ">
              <Paypal price={20} hi={30} sh={"pill"} />
            </div>
            <div className="contact">
              <Contact IDs={ids} />
            </div>
          </div>
          {/* ======================================================================================== */}
          <div className="flex justify-between items-center w-[80%] mx-auto my-10 ">
            <div className="text-lg font-semibold text-slate-700">
              Total Price: 160$
            </div>
            <div>
              <Paypal price={20} hi={40} sh={"rect"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
