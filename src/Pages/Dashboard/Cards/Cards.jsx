import { Card } from "@tremor/react";
import "./Cards.scss";
function Cards() {
  return (
    <div className=" flex flex-auto flex-col md:flex-row justify-content-between align-items-center gap-5 my-4 ">
      <Card className="wrapper md:w-87 lg:w-full text-center max-w-xs rounded-xl    ">
        <h4 className="text-2xl text-[#172554]">Total Users</h4>
        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-600 text-xl">
          $ 71,465
        </p>
      </Card>
      <Card className="wrapper md:w-87 lg:w-full text-center max-w-xs rounded-xl ">
        <h4 className="text-2xl text-[#172554]">Total Gigs</h4>
        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-600 text-xl">
          $ 71,465
        </p>
      </Card>
      <Card className="wrapper md:w-87   lg:w-full text-center max-w-xs rounded-xl   ">
        <h4 className="text-2xl text-[#172554]">All Orders</h4>
        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-600 text-xl">
          $ 71,465
        </p>
      </Card>
    </div>
  );
}

export default Cards;
/*outline outline-[#172554]*/
