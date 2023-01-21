// import { Dispatch } from "@reduxjs/toolkit";
import * as api from "../api/index.js";
import { AuthState, AUTH } from "../features/auth/auth-slice.js";

import { createAsyncThunk } from "@reduxjs/toolkit";

// export const signIn = (formData: AuthState) => async (dispatch: any) => {
//   try {
//     const { data } = await api.signIn(formData);
//     dispatch(AUTH(data));
//   } catch (error) {
//     console.log(error);
//   }
// };

export const userLogin = createAsyncThunk(
  "auth/login",
  async (formData:AuthState, rejectWithValue) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.signIn(formData, config); 
    } catch (error) {}
  }
);
