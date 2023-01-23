import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userLogin } from "./thunk";

export interface FormState {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
export const blankForm: FormState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export interface AuthState {
  loading: boolean;
  userInfo: {};
  userToken: null;
  error: string | null;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AUTH(state, action: PayloadAction<FormState>) {
      state.userInfo = action.payload;
    },
    SIGNOUT(state) {
      state = initialState;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.userInfo = payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(userLogin.rejected, (state, payload) => {
      if (payload) state.error = payload.type; //smth not correct
      state.loading = false
    });
  },
});

export const { AUTH, SIGNOUT } = authSlice.actions;
export default authSlice.reducer;
