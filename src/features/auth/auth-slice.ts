import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const initialState: AuthState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AUTH(state, action: PayloadAction<AuthState>) {
      state = action.payload;
      localStorage.setItem("profile", JSON.stringify({ state }));
    },
    SIGNOUT(state){
        state = initialState;
        localStorage.clear();
    }

  },
});

export const { AUTH, SIGNOUT } = authSlice.actions;
export default authSlice.reducer;
