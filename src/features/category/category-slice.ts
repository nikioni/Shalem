import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  value: string[];
}

const initialState: CategoryState = {
  value: [
    "food",
    "accomandation",
    "entertainment",
    "transport",
    "shopping",
    "other",
  ],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
