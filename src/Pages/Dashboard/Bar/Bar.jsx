import { useEffect, useState } from "react";
import { BarChart } from "@tremor/react";

function Bar() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const fetchCategoryData = async () => {
    try {
      const BASE_URL = "https://gp-workwave-production.up.railway.app";
      const response = await fetch(`${BASE_URL}/api/gigs`);
      const gigsData = await response.json();

      const categoryCounts = countCategories(gigsData);
      const formattedData = formatChartData(categoryCounts);

      setChartData(formattedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching category data:", error);
      setLoading(false);
    }
  };

  const countCategories = (gigsData) => {
    const categoryCounts = {};
    gigsData.forEach((gig) => {
      const category = gig.cat.toLowerCase();
      if (categoryCounts[category]) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    });
    return categoryCounts;
  };

  const formatChartData = (categoryCounts) => {
    return Object.keys(categoryCounts).map((category) => ({
      name: category,
      "Number of items in each category.": categoryCounts[category],
    }));
  };

  const dataFormatter = (number) =>
    Intl.NumberFormat("us").format(number).toString();

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BarChart
          data={chartData}
          index="name"
          categories={["Number of items in each category."]}
          colors={["blue"]}
          valueFormatter={dataFormatter}
          yAxisWidth={48}
          onValueChange={(v) => console.log(v)}
          className="mt-4 w-full mb-20 md:w-5/12"
        />
      )}
    </>
  );
}

export default Bar;
