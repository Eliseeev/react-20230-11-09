import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsReviewsIds } from "../../restaurant/selectors";
import { selectReviewsIds } from "../selectors";

export const getReviews = createAsyncThunk(
  "restaurant/getReviews",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviewsIds = selectRestaurantsReviewsIds(state, restaurantId)
      const reviewsIds = selectReviewsIds(state)

      return !restaurantReviewsIds.every((id) => reviewsIds.includes(id));
    },
  }
);
