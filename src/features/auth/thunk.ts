import * as api from "../../api/index";
import { FormState, AUTH } from "../../features/auth/auth-slice.js";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
  "auth/login",
  async (formData:FormState) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const {data} = await api.signIn(formData);
      localStorage.setItem('profile', data) 
      return data
    } catch (error) {
        console.log(error)
    }
  }
);
