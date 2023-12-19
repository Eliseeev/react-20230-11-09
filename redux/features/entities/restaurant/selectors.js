export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurants = (state) => selectRestaurantModule(state).entities;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id];

export const selectRestaurantsDishIds = (state, id) => selectRestaurantById(state, id)?.menu

export const selectRestaurantsReviewsIds = (state, id) => selectRestaurantById(state, id)?.reviews;

export const selectRestaurantLoadingStatus = (state) => {
    return selectRestaurantModule(state).status;
}