import { Card } from "@tremor/react";
import "./Cards.scss";
import { useEffect, useState } from "react";

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
    return fetch(`https://workwave-vq08.onrender.com/api/${endpoint}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJkMGRlOTNmMzBlNTBkZmU5Y2U0NzciLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNzE0MjI4Nzg3fQ.hHQ7GjGjiBg8XDl1bf8CB1XP3D9IuPpxJMOR5ab4hek",
      },
    });
  };

  const fetchData = async () => {
    try {
      const responses = await Promise.all([
        fetchTotal("users"),
        fetchTotal("orders/getallOrders"),
        fetchTotal("gigs?cat=design"),
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

  const renderCard = (title, value) => (
    <Card className="wrapper md:w-87 lg:w-full text-center max-w-xs rounded-xl">
      <h4 className="text-2xl text-[#172554]">{title}</h4>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-600 text-xl">
        {loading ? "Loading..." : value}
      </p>
    </Card>
  );

  return (
    <div className="flex flex-auto flex-col md:flex-row justify-content-between align-items-center gap-5 my-4">
      {renderCard("Total Users", totals.totalUsers)}
      {renderCard("Total Orders", totals.totalOrders)}
      {renderCard("Total Gigs", totals.totalGigs)}
    </div>
  );
}

export default Cards;
