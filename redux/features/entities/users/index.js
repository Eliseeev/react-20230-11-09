import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunk/get-users";

export const usersSlice = createSlice({
    name: 'restaurant',
    initialState: { entities: {}, ids: [], status: "idle"},
    extraReducers: (builder) => builder
    .addCase(getUsers.pending, (state) => {
      state.status = 'pending'
    })
    .addCase(getUsers.fulfilled, (state, {payload}) => {
      state.entities = payload.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
      state.ids = payload.map(({id}) => id);
      state.status = 'fulfilled'
    })
    .addCase(getUsers.rejected, (state) => {
      state.status = 'rejected'
    }),
  });

