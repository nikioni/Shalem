import React, { useState } from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { signIn } from "../api";
import { userLogin } from "../features/auth/thunk";
import { blankForm } from "../features/auth/auth-slice";
import * as api from "../api/index";
import { profile } from "console";

export interface IHome {}

const Home: React.FC<IHome> = (props) => {
  const auth = useAppSelector((state) => state.auth);
  const [formData, setFormData] = useState(blankForm);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await api
      .signIn(formData)
      .then((response) => {
        localStorage.setItem("profile", JSON.stringify(response.data));
        console.log(response)
      })
      .catch((e) => {
        console.log(e);
      });

    // userLogin(formData);
  };
  return (
    <>
      <h1>Come In!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-name">User:</label>
        <input onChange={handleChange} name="email" id="email" type="text" />
        <label htmlFor="Password:">Password:</label>
        <input onChange={handleChange} name="password" type="password" />
        <button type="submit">Sign In!</button>
      </form>
      <Link to="/signup">Don't you have an account?</Link>
    </>
  );
};

export default Home;
