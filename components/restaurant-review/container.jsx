import { useSelector } from "react-redux"
import RestaurantReview from "./component"
import { selectReviewById } from "../../redux/features/entities/reviews/selectors";

export const RestaurantReviewContainer = ({id}) => {
    const review = useSelector((state) => selectReviewById(state, id));
    
    if(!review) return null;

    return <RestaurantReview review = {review}/> 
}
