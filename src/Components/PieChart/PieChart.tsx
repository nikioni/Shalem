import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import PiePiece from "./PiePiece";

export interface IPieChart {}

const PieChart: React.FC<IPieChart> = (props) => {
  const categories: string[] = [
    "food",
    "accomandation",
    "enterainment",
    "transport",
    "shopping",
    "other",
  ];
  var test = 0;
  return (
    <>
      <Box sx={{ display: "flex", height: 800, width: "70%", margin: "auto" }}>
        {categories.map((cat: string, key: number) => {
          test += 1; //change for a some of previous to send as prop for adding part that should be overlapped
          console.log("test", test);
          return <PiePiece category={cat} layer={key}></PiePiece>;
        })}
      </Box>
    </>
  );
};

export default PieChart;
