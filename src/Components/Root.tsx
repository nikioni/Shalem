import React from "react";
import { Link, Outlet } from "react-router-dom";

export interface IRoot {}

const Root: React.FC<IRoot> = (props) => {
    const moneyFace = String.fromCodePoint(0x1F911);
  return (
    <>
      <h1>Welcome to Shalem{moneyFace}</h1>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
