import React from "react";
import Chart from "react-apexcharts";

export interface IPieChart {
  options?: Object;
}

const PieChart: React.FC<IPieChart> = (props) => {
  //just for demo chart. options should be sent by props
  const options = {
    series: [44, 55, 33],
    chartOptions: { labels: ["a", "b", "c"] },
    plotOptions: {
      pie: {
        customScale: 0.8,
      },
    },
  };
  const labels = {};
  return (
    <div className="pie-chart">
      <Chart type="pie" series={options.series} options={options} />
    </div>
  );
};

export default PieChart;
