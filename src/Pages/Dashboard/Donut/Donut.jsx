/* import { ProgressCircle, Card } from "@tremor/react";

function Donut() {
  return (
    /*  <div className="flex items-center  justify-around content-center mt-10 ">
      <p>Work Wave Revnue</p>
      <ProgressCircle
        value={72}
        size="xl"
        tooltip="radius: 25, strokeWidth: 6"
      />
    </div> 
    <Card className="mx-auto flex max-w-xl flex-wrap justify-center gap-8">
      <ProgressCircle
        value={72}
        radius={25}
        strokeWidth={6}
        tooltip="radius: 25, strokeWidth: 6"
      ></ProgressCircle>
    </Card>
  );
}

export default Donut; */

/* import { DonutChart, Legend, ProgressCircle } from "@tremor/react";
import "./Donut.scss";
const sales = [
  { name: "Graphics & Design", sales: 780 },
  { name: "Digital Marketing", sales: 620 },
  { name: "Writing & Translation", sales: 540 },
  { name: "Video & Animation", sales: 430 },
  { name: "Music & Audio", sales: 360 },
];

function Donut() {
  return (
    <>
      <div className=" flex items-center justify-center space-x-6 md:ml-12">
        {/*   <DonutChart
          data={sales}
          category="sales"
          index="name"
          colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
          className="w-40 donut"
        /> }{" "}
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          // valueFormatter={valueFormatter}
          colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
          className="w-40"
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
 */

/* import { Card, ProgressBar } from "@tremor/react";

function Donut() {
  return (
    <div className="flex items-center justify-center  md:mt-10 lg:mr-64 md ">
      <Card className="sm-44 md:w-96">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
          <span>Total Work Wave Revenue &bull; 45%</span>
          <span>$20,000</span>
        </p>
        <ProgressBar value={45} color="blue" className="mt-3" />
      </Card>
    </div>
  );
}

export default Donut;
 */

import { Card, ProgressBar } from "@tremor/react";

function Donut() {
  return (
    <div className="md:mt-10 md:mr-72 progress__wrapper">
      <Card className="w-full sm:w-96">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between ">
          <span>Total Work Wave Revenue &bull; 45%</span>
          <span>$20,000</span>
        </p>
        <ProgressBar value={45} color="blue" className="mt-3" />
      </Card>
    </div>
  );
}

export default Donut;
