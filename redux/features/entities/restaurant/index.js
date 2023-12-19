import { createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunk/get-restaurants";

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: { entities: {}, ids: [], status: "idle"},
    extraReducers: (builder) => builder
    .addCase(getRestaurants.pending, (state) => {
      state.status = 'pending'
    })
    .addCase(getRestaurants.fulfilled, (state, {payload}) => {
      state.entities = payload.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;
        return acc;
      }, {});
      state.ids = payload.map(({id}) => id);
      state.status = 'fulfilled'
    })
    .addCase(getRestaurants.rejected, (state) => {
      state.status = 'rejected'
    }),
  });

