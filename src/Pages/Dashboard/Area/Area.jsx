import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 23",
    Revenue: 167,
  },
  {
    date: "Feb 23",
    Revenue: 125,
  },
  {
    date: "Mar 23",
    Revenue: 156,
  },
  {
    date: "Apr 23",
    Revenue: 165,
  },
  {
    date: "May 23",
    Revenue: 153,
  },
  {
    date: "Jun 23",
    Revenue: 124,
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
                {category.value} bpm
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
        categories={["Revenue"]}
        colors={["blue"]}
        yAxisWidth={30}
        customTooltip={customTooltip}
      />
    </>
  );
}

export default Area;
