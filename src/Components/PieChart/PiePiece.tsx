import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";

export interface IPiePiece {
  layer: number;
  category: string;
}

const PiePiece: React.FC<IPiePiece> = (props) => {
  const switchColor = (category: string): string => {
    switch (category) {
      case "food":
        return "green";
      case "accomandation":
        return "yellow";
      case "enterainment":
        return "pink";
      case "transport":
        return "blue";
      case "shopping":
        return "red";
      case "other":
        return "grey";
      default:
        return "black";
    }
  };
  return (
    <>
      <CircularProgress
        size={200}
        value={20 + 20 * props.layer}
        thickness={15}
        variant="determinate"
        color="info"
        sx={{
          position: "absolute",
          "z-index": -props.layer,
          color: switchColor(props.category),
        }}
      />
    </>
  );
};

export default PiePiece;
