import { DonutChart, Legend } from "@tremor/react";
import "./Donut.scss";
const sales = [
  { name: "Graphics & Design", sales: 780 },
  { name: "Digital Marketing", sales: 620 },
  { name: "Writing & Translation", sales: 540 },
  { name: "Video & Animation", sales: 430 },
  { name: "Music & Audio", sales: 360 },
];

const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

function Donut() {
  return (
    <>
      <div className=" flex items-center justify-center space-x-6 md:ml-12">
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
          // className="lg:w-40 md:w-80"
          className="w-40 donut"
        />
        <Legend
          categories={[
            "Graphic Design",
            "Programming",
            "UI/UX",
            "Engineering",
            "Logo",
          ]}
          colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
          className="max-w-xs categories__name"
        />
      </div>
    </>
  );
}

export default Donut;
