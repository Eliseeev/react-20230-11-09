export const selectReviewModule = (state) => state.review

export const selectReviewsIds = (state) => selectReviewModule(state).ids

export const selectReviewById = (state, id) => selectReviewModule(state).entities[id]