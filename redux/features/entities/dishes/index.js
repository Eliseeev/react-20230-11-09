import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../constans/mock-norm";

const dishesSlice = createSlice({
    name: 'dish',
  initialState: {
    entities: normalizedDishes.reduce((acc, dish) => {
      acc[dish.id] = dish;

      return acc;
    }, {}),
    ids: normalizedDishes.map(({id}) => id),
  }
});

export default dishesSlice