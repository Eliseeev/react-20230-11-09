import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./thunk/get-reviews";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState({ status: "idle" }),
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.upsertMany(state, payload);
        state.status = "fulfilled";
      })
      .addCase(getReviews.rejected, (state) => {
        state.status = "rejected";
      }),
});