import { useDispatch, useSelector } from "react-redux"
import RestaurantReviews from "./components"
import { selectRestaurantsReviewsIds } from "../../redux/features/entities/restaurant/selectors";
import { useEffect } from "react";
import { getReviews } from "../../redux/features/entities/reviews/thunk/get-reviews";

export const RestaurantReviewsContainer = ({restaurantId}) => {
    const restaurantReviews = useSelector((state) => selectRestaurantsReviewsIds(state, restaurantId))
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getReviews(restaurantId));
    }, [dispatch, restaurantId]);
    
    return <RestaurantReviews reviews = {restaurantReviews}/>
}