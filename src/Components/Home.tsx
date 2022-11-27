import React from "react";
import { Form, Link } from "react-router-dom";

export interface IHome {}

const Home: React.FC<IHome> = (props) => {
  return (
    <>
      <h1>Come In!</h1>
      <Form method="post">
        <label htmlFor="user-name">User:</label>
        <input id="user-name" type="text" />
        <label htmlFor="Password:">Password:</label>
        <input type="password"/>
      </Form>
    <Link to="/signup">Don't you have an account?</Link>
    </>
  );
};

export default Home;
