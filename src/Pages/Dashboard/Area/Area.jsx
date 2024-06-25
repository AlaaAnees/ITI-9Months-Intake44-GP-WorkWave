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
      const createdAt = new Date(order.createdAt);
      const month = createdAt.toLocaleString("default", { month: "short" });
      const day = createdAt.getDate();

      const dateKey = `${month} ${day}`;

      if (!acc[dateKey]) {
        acc[dateKey] = 0;
      }
      acc[dateKey]++;

      return acc;
    }, {});

    const formattedData = Object.keys(ordersByDate).map((dateKey) => ({
      date: dateKey,
      "Orders Per Day": ordersByDate[dateKey],
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
          categories={["Orders Per Day"]}
          colors={["blue"]}
          yAxisWidth={30}
          customTooltip={customTooltip}
        />
      )}
    </>
  );
}

export default Area;
