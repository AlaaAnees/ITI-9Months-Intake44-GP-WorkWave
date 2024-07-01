import "./Cards.scss";
import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { SiProgress } from "react-icons/si";

function Cards() {
  const [loading, setLoading] = useState(true);
  const [totals, setTotals] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalGigs: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchTotal = async (endpoint) => {
    return fetch(
      `https://gp-workwave-production.up.railway.app/api/${endpoint}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJkMGRlOTNmMzBlNTBkZmU5Y2U0NzciLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNzE0MjI4Nzg3fQ.hHQ7GjGjiBg8XDl1bf8CB1XP3D9IuPpxJMOR5ab4hek",
        },
      }
    );
  };

  const fetchData = async () => {
    try {
      const responses = await Promise.all([
        fetchTotal("users"),
        fetchTotal("orders/getallOrders"),
        fetchTotal("gigs"),
      ]);
      const [users, orders, gigs] = await Promise.all(
        responses.map((response) => response.json())
      );
      setTotals({
        totalUsers: users.data.allUsers.length,
        totalOrders: orders.data.allOrders.length,
        totalGigs: gigs.length,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const renderCard = (title, value, icon) => (
    <div className=" wrapper  border-2 rounded-3 border-[#676767] mt-6 w-72 lg:h-40 md:h-52  text-center mx-auto max-w-xs rounded-none">
      <div className="flex items-center mt-3 justify-center items-center mx-auto md:flex-col">
        {icon}
        <p className="text-2xl text-[#60A5FA] ml-2">{title}</p>
      </div>
      <p className=" font-semibold text-[#676767] text-xl">
        {loading ? "Loading..." : value}
      </p>
    </div>
  );

  return (
    <div className="flex flex-auto flex-col md:flex-row justify-content-between align-items-center gap-5 my-4">
      {renderCard(
        "TOTAL USERS",
        totals.totalUsers,
        <FaUsers className="text-4xl text-[#60A5FA] mb-2" />
      )}
      {renderCard(
        "TOTAL ORDERS",
        totals.totalOrders,
        <GiProgression className="text-4xl text-[#60A5FA] mb-2" />
      )}
      {renderCard(
        "TOTAL GIGS ♦️",
        totals.totalGigs,
        <SiProgress className="text-4xl text-[#60A5FA] mb-2" />
      )}
    </div>
  );
}

export default Cards;
