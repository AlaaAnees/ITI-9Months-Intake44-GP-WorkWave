import Contact from "../../Components/Contact/Contact";
import Paypal from "../../Components/Payment/Payment";

const Explore = () => {
  let ids = {
    sellerId: "662e9693e3b98a3c9b42c581",
    buyerId: "6643b8a0773f42b4c6612dab",
  };

  // const conversationId = "662e9693e3b98a3c9b42c581662ea6c6d385235bd12335ca";

  return (
    <>
      <div className="parent h-screen">
        <div className="container">
          <Contact IDs={ids} />
          <Paypal />
        </div>
      </div>
    </>
  );
};

export default Explore;
