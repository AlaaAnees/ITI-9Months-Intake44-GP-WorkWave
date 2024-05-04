import { useEffect, useState } from "react";
import Cards from "./Cards/Cards";
import Loading from "../Loading/Loading";
import "./Dashboard.scss";
import Bar from "./Bar/Bar";
import Area from "./Area/Area";
function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="container wrapper__all ">
          <div className="ml-20">
            <h3 className="pt-10 text-2xl text-[#676767] font-bold">
              DASHBOARD
            </h3>
            <h6 className="text-[#60A5FA]">Welcome to dashboard</h6>
          </div>
          <Cards />
          <div className="flex justify-around mt-12 flex-col md:flex-row items-center md:items-start">
            <Bar className="md:mr-6" />
            <Area className="md:ml-6 mt-6 md:mt-0" />
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
