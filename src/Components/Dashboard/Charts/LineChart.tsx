import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

export interface ILineChart {}

const LineChart: React.FC<ILineChart> = (props) => {
  const options: ApexOptions = {
    stroke: {
      curve: "smooth",
    },
  };
  const series = [
    {
      name: "food",
      data: [1130, 1400, 1235, 1500, 1490, 1460, 1700, 1900, 1250, 1000, 1100, 1200],
    },
    {
      name: "accomandation",
      data: [1130, 1400, 1235, 1500, 1490, 1460, 1700, 1900, 1250, 1000, 1100, 1200],
    },
    {
      name: "entertainment",
      data: [400, 700, 550, 500, 500, 400, 600, 900, 500, 550, 400, 550],
    },
    {
      name: "transport",
      data: [250, 300, 350, 250, 150, 200, 200, 200, 250, 280, 350, 300],
    },
    {
      name: "shopping",
      data: [500, 100, 100, 0, 0, 100, 200, 1000, 300, 200, 100, 100],
    },
    {
      name: "other",
      data: [500, 300, 100, 350, 100, 500, 500, 200, 250, 100, 100, 200],
    },
  ];
  return (
    <div className="pie-chart">
      <Chart stroke="smooth" series={series} options={options} />
    </div>
  );
};

export default LineChart;
