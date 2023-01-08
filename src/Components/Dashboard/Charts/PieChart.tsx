import React from "react";
import Chart from "react-apexcharts";
import { useAppSelector } from "../../../app/hook";
import { RootState } from "../../../app/store";
import './Charts.css';

export interface IPieChart {
  options?: Object;
}
export const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const PieChart: React.FC<IPieChart> = (props) => {
  //just for demo chart. options should be sent by props
  const categories = useAppSelector(
    (state: RootState) => state.categories.value
  );
  const options = {
    series: [1500, 2100, 535, 250, 200, 200],
    labels: categories ,
    plotOptions: {
      pie: {
        customScale: 0.8,
      },
    },
  };
  return (
    <div className="pie-chart">
      <select>
        {month.map((month: string) => (
          <option>{month}</option>
        ))}
      </select>
      <Chart type="pie" series={options.series} options={options} />
    </div>
  );
};

export default PieChart;
