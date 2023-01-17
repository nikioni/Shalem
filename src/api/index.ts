import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthState } from "../features/auth/auth-slice";

// Base URL supposed to be on 8080 port
const API = axios.create({ baseURL: "http://localhost:8080" });

export const signIn = (formData: AuthState) => API.post('/users/signin', formData);
export const signUp = (formData: AuthState) => API.post('/signup', formData);


