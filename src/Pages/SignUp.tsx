import React from "react";
import { Form } from "react-router-dom";

export interface ISignUp {}

const SignUp: React.FC<ISignUp> = (props) => {
  return (
    <>
    <h1>Create an Account</h1>
      <Form></Form>
    </>
  );
};

export default SignUp;
