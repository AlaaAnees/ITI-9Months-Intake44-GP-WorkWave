import { BarChart } from "@tremor/react";

const chartdata = [
  {
    name: "Programming",
    "Number of items in each category.": 2488,
  },
  {
    name: "Programming",
    "Number of items in each category.": 1445,
  },
  {
    name: "Programming",
    "Number of items in each category.": 743,
  },
  {
    name: "Programming",
    "Number of items in each category.": 281,
  },
  {
    name: "Programming",
    "Number of items in each category.": 251,
  },
  {
    name: "Programming",
    "Number of items in each category.": 232,
  },
  {
    name: "Programming",
    "Number of items in each category.": 98,
  },
];

const dataFormatter = (number) =>
  Intl.NumberFormat("us").format(number).toString();

function Bar() {
  return (
    <BarChart
      data={chartdata}
      index="name"
      categories={["Number of items in each category."]}
      colors={["blue"]}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
      onValueChange={(v) => console.log(v)}
      className="mt-4 w-full mb-20 md:w-5/12"
    />
  );
}

export default Bar;
