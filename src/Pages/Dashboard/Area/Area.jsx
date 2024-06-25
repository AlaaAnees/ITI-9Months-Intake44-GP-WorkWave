/* import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 23",
    "Orders Tracker": 167,
  },
  {
    date: "Feb 23",
    "Orders Tracker": 125,
  },
  {
    date: "Mar 23",
    "Orders Tracker": 156,
  },
  {
    date: "Apr 23",
    "Orders Tracker": 165,
  },
  {
    date: "May 23",
    "Orders Tracker": 153,
  },
  {
    date: "Jun 23",
    "Orders Tracker": 124,
  },
];

function Area() {
  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        {payload.map((category, idx) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div
              className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.dataKey}</p>
              <p className="font-medium text-tremor-content-emphasis">
                {category.value} order
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <AreaChart
        className="md:mt-14 w-full h-72 md:w-5/12 mb-20 "
        data={chartdata}
        index="date"
        categories={["Orders Tracker"]}
        colors={["blue"]}
        yAxisWidth={30}
        customTooltip={customTooltip}
      />
    </>
  );
}

export default Area; */

/* [{ date: '2023-01', orderCount: 167 }, { date: '2023-02', orderCount: 125 }, ...] */

/* import { useEffect, useState } from "react";
import { AreaChart } from "@tremor/react";

function Area() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderData();
  }, []);

  const fetchOrderData = async () => {
    try {
      const response = await fetch(
        `https://workwave-vq08.onrender.com/api/orders/getallOrders`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJkMGRlOTNmMzBlNTBkZmU5Y2U0NzciLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNzE0MjI4Nzg3fQ.hHQ7GjGjiBg8XDl1bf8CB1XP3D9IuPpxJMOR5ab4hek",
          },
        }
      );
      const orders = await response.json();
      processOrderData(orders.data.allOrders);
    } catch (error) {
      console.error("Error fetching order data:", error);
      setLoading(false);
    }
  };

  const processOrderData = (orders) => {
    const ordersByDate = orders.reduce((acc, order) => {
      const createdAt = new Date(order.createdAt); // Parse createdAt date
      const dateKey = `${createdAt.getFullYear()}-${
        createdAt.getMonth() + 1
      }-${createdAt.getDate()}`; // Use YYYY-MM-DD format as key

      if (!acc[dateKey]) {
        acc[dateKey] = 0;
      }
      acc[dateKey]++;

      return acc;
    }, {});

    const formattedData = Object.keys(ordersByDate).map((dateKey) => ({
      date: dateKey, // Date in YYYY-MM-DD format
      "Orders Count": ordersByDate[dateKey],
    }));

    setChartData(formattedData);
    setLoading(false);
  };

  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        {payload.map((category, idx) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div
              className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.dataKey}</p>
              <p className="font-medium text-tremor-content-emphasis">
                {category.value} orders
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <AreaChart
          className="md:mt-14 w-full h-72 md:w-5/12 mb-20"
          data={chartData}
          index="date"
          categories={["Orders Count"]}
          colors={["blue"]}
          yAxisWidth={30}
          customTooltip={customTooltip}
        />
      )}
    </>
  );
}

export default Area; */

import { useEffect, useState } from "react";
import { AreaChart } from "@tremor/react";

function Area() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderData();
  }, []);

  const fetchOrderData = async () => {
    try {
      const response = await fetch(
        `https://workwave-vq08.onrender.com/api/orders/getallOrders`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJkMGRlOTNmMzBlNTBkZmU5Y2U0NzciLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNzE0MjI4Nzg3fQ.hHQ7GjGjiBg8XDl1bf8CB1XP3D9IuPpxJMOR5ab4hek",
          },
        }
      );
      const orders = await response.json();
      processOrderData(orders.data.allOrders);
    } catch (error) {
      console.error("Error fetching order data:", error);
      setLoading(false);
    }
  };

  const processOrderData = (orders) => {
    const ordersByDate = orders.reduce((acc, order) => {
      const createdAt = new Date(order.createdAt); // Parse createdAt date
      const month = createdAt.toLocaleString("default", { month: "short" }); // Get short month name (e.g., Jan)
      const day = createdAt.getDate(); // Get day of the month

      const dateKey = `${month} ${day}`; // Format date as "Jun 23"

      if (!acc[dateKey]) {
        acc[dateKey] = 0;
      }
      acc[dateKey]++;

      return acc;
    }, {});

    const formattedData = Object.keys(ordersByDate).map((dateKey) => ({
      date: dateKey, // Date in "Jun 23" format
      "Orders Count": ordersByDate[dateKey],
    }));

    setChartData(formattedData);
    setLoading(false);
  };

  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        {payload.map((category, idx) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div
              className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.dataKey}</p>
              <p className="font-medium text-tremor-content-emphasis">
                {category.value} orders
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <AreaChart
          className="md:mt-14 w-full h-72 md:w-5/12 mb-20"
          data={chartData}
          index="date"
          categories={["Orders Count"]}
          colors={["blue"]}
          yAxisWidth={30}
          customTooltip={customTooltip}
        />
      )}
    </>
  );
}

export default Area;

/* import { useEffect, useState } from "react";
import { AreaChart } from "@tremor/react";

function Area() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderData();
  }, []);

  const fetchOrderData = async () => {
    try {
      const response = await fetch(
        `https://workwave-vq08.onrender.com/api/orders/getallOrders`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJkMGRlOTNmMzBlNTBkZmU5Y2U0NzciLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNzE0MjI4Nzg3fQ.hHQ7GjGjiBg8XDl1bf8CB1XP3D9IuPpxJMOR5ab4hek",
          },
        }
      );
      const orders = await response.json();
      processOrderData(orders.data.allOrders);
    } catch (error) {
      console.error("Error fetching order data:", error);
      setLoading(false);
    }
  };

  const processOrderData = (orders) => {
    // Initialize an object to store orders count by date
    const ordersByDate = {};

    // Iterate through each order and aggregate by date
    orders.forEach((order) => {
      // Extract date from createdAt field
      const createdAt = new Date(order.createdAt);
      const dateKey = `${createdAt.getFullYear()}-${
        createdAt.getMonth() + 1
      }-${createdAt.getDate()}`;

      // Increment count for the date or initialize it
      if (!ordersByDate[dateKey]) {
        ordersByDate[dateKey] = 0;
      }
      ordersByDate[dateKey]++;
    });

    // Format data for chart by mapping over ordersByDate object
    const formattedData = Object.keys(ordersByDate).map((dateKey) => ({
      date: dateKey, // Date in YYYY-MM-DD format
      "Orders Count": ordersByDate[dateKey],
    }));

    // Set formatted data to state
    setChartData(formattedData);
    setLoading(false);
  };

  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        {payload.map((entry, index) => (
          <div key={index} className="flex flex-1 space-x-2.5">
            <div
              className={`flex w-1 flex-col bg-${entry.color}-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{entry.dataKey}</p>
              <p className="font-medium text-tremor-content-emphasis">
                {entry.value} orders
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <AreaChart
          className="md:mt-14 w-full h-72 md:w-5/12 mb-20"
          data={chartData}
          indexKey="date" // Use indexKey instead of index
          categories={["Orders Count"]}
          colors={["blue"]}
          yAxisWidth={30}
          xTickFormatter={(tick) => tick} // Optional: Customize x-axis tick formatting
          customTooltip={customTooltip}
        />
      )}
    </>
  );
}

export default Area; */
