import { Card } from "@tremor/react";
import "./Cards.scss";
import { useEffect, useState } from "react";

function Cards() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalGigs, setTotalGigs] = useState(0);

  useEffect(() => {
    fetchTotalUsers();
    fetchTotalOrders();
    fetchTotalGigs();
  }, []);

  const fetchTotalUsers = () => {
    fetch("https://workwave-vq08.onrender.com/api/users/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJkMGRlOTNmMzBlNTBkZmU5Y2U0NzciLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNzE0MjI4Nzg3fQ.hHQ7GjGjiBg8XDl1bf8CB1XP3D9IuPpxJMOR5ab4hek",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalUsers(data.data.allUsers.length);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const fetchTotalOrders = () => {
    fetch("https://workwave-vq08.onrender.com/api/orders//getAllOrders", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJkMGRlOTNmMzBlNTBkZmU5Y2U0NzciLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNzE0MjI4Nzg3fQ.hHQ7GjGjiBg8XDl1bf8CB1XP3D9IuPpxJMOR5ab4hek",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalOrders(data.data.allOrders.length);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  };

  const fetchTotalGigs = () => {
    fetch("https://workwave-vq08.onrender.com/api/gigs?cat=design", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJkMGRlOTNmMzBlNTBkZmU5Y2U0NzciLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNzE0MjI4Nzg3fQ.hHQ7GjGjiBg8XDl1bf8CB1XP3D9IuPpxJMOR5ab4hek",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalGigs(data.length);
      })
      .catch((error) => {
        console.error("Error fetching gigs:", error);
      });
  };

  const renderCard = (title, value) => (
    <Card className="wrapper md:w-87 lg:w-full text-center max-w-xs rounded-xl">
      <h4 className="text-2xl text-[#172554]">{title}</h4>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-600 text-xl">
        {value}
      </p>
    </Card>
  );

  return (
    <div className="flex flex-auto flex-col md:flex-row justify-content-between align-items-center gap-5 my-4">
      {renderCard("Total Users", totalUsers)}
      {renderCard("Total Orders", totalOrders)}
      {renderCard("Total Gigs", totalGigs)}
    </div>
  );
}

export default Cards;
