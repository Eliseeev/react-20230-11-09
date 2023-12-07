import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/entities/users";
import { restaurantSlice } from "./features/entities/restaurant";
import dishesSlice from "./features/entities/dishes";
import reviewSlice from "./features/entities/reviews";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        review: reviewSlice.reducer,
        restaurant: restaurantSlice.reducer,
        dish: dishesSlice.reducer,
    },
})

export default store



