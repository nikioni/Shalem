import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import PasswordInput from "../Components/PasswordInput";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { signout, signup } from "../features/auth/auth-slice";
import { signIn, signUp } from "../api";

export interface IAuth {}

const Auth: React.FC<IAuth> = (props) => {
  const auth = useAppSelector((state) => state.auth);

  const [user, setUser] = useState(localStorage);
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState(auth);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signup(formData));
      signUp(formData);
      console.log(formData);
      setIsSignUp(!isSignUp);
    } else {
      dispatch(signout());
      setIsSignUp(!isSignUp);
    }
  };
  return (
    <>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12} sm={12}>
          <TextField
            name="username"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <PasswordInput name="password"></PasswordInput>
        </Grid>
        {isSignUp && (
          <Grid item xs={12} sm={12}>
            <PasswordInput name="confirmPassword"></PasswordInput>
          </Grid>
        )}
        {isSignUp ? (
          <Grid item xs={12} sm={12}>
            <Button type="submit">Sign Up!</Button>
          </Grid>
        ) : (
          <Grid item xs={12} sm={12}>
            <Button type="submit">Sign In!</Button>
          </Grid>
        )}
      </form>
    </>
  );
};

export default Auth;
