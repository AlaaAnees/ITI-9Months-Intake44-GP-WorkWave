import Cards from "./Cards/Cards";

import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="container wrapper__all ">
      <div className="ml-14">
        <h3 className="pt-10 text-[#676767]">DASHBOARD</h3>
        <h6 className="text-[#60A5FA]">Welcome to dashboard</h6>
      </div>
      <Cards />
      <div className="flex flex-col md:flex-row justify-around items-center ">
        <div className="flex flex-col mt-16 ">
          <div className=" ">
            {/* <Spark />
            <Progress /> */}
          </div>
        </div>
        <div>{/* <Donut /> */}</div>
      </div>
      {/* <Bar /> */}
    </div>
  );
}

export default Dashboard;
