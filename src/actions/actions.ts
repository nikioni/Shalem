import { Dispatch } from "@reduxjs/toolkit";
import * as api from "../api/index";
import { FormState, AUTH } from "../features/auth/auth-slice";
export const signIn = (formData: FormState) => async (dispatch: any) => {
  try {
    // const { data } = await api.signIn(formData, null);
    // dispatch(AUTH(data));
  } catch (error) {
    console.log(error);
  }
};