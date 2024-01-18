import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./features/entities/restaurant";
import { dishSlice } from "./features/entities/dish";
import { reviewsSlice } from "./features/entities/reviews";
import { usersSlice } from "./features/entities/users";
import { api } from "./service/api";

const store = configureStore({
    reducer: {
        user: usersSlice.reducer,
        review: reviewsSlice.reducer,
        restaurant: restaurantSlice.reducer,
        dish: dishSlice.reducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export default store





