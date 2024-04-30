import Cards from "./Cards/Cards";
import Spark from "./Spark/Spark";
import Donut from "./Donut/Donut";
import Line from "./Bar/Bar";
import Progress from "./Progress/Progress";

function Dashboard() {
  return (
    <div className="container mt-24">
      <Cards />
      <div className="flex flex-col md:flex-row justify-around items-center ">
        <div className="flex flex-col mt-16 ">
          <div className=" ">
            <Spark />
            <Progress />
          </div>
        </div>
        <div>
          <Donut />
        </div>
      </div>
      <Line />
    </div>
  );
}

export default Dashboard;
