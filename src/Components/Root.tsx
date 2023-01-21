import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hook";
import { SIGNOUT } from "../features/auth/auth-slice";

export interface IRoot {}

const Root: React.FC<IRoot> = (props) => {
  const moneyFace = String.fromCodePoint(0x1f911);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(SIGNOUT());
    navigate("/");
  };
  return (
    <>
      <h1>Welcome to Shalem{moneyFace}</h1>
      {localStorage.getItem("profile")!==null ? <button onClick={handleSignOut}>Sign Out</button> : null}
      <Outlet></Outlet>
    </>
  );
};

export default Root;
