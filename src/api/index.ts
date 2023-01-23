import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";
import { FormState } from "../features/auth/auth-slice";

// Base URL supposed to be on 8080 port
const API = axios.create({ baseURL: "http://localhost:8080" });

export const signIn = (formData: FormState) => API.post('/signin', formData);
export const signUp = (formData: FormState) => API.post('/signup', formData);


