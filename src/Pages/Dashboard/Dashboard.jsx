import Cards from "./Cards/Cards";
import Spark from "./Spark/Spark";
import Donut from "./Donut/Donut";

function Dashboard() {
  return (
    <div className="container mt-32">
      <Cards />
      <Spark />
      <Donut />
    </div>
  );
}

export default Dashboard;
