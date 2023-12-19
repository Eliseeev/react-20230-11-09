import styles from './styles.module.css'
import { RestaurantReviewContainer } from "../restaurant-review/container"

const RestaurantReviews = ({reviews}) => {
    return (
        <div>
            <div className = {styles.border}></div>
            <h3 className = {styles.reviewsName}>Feedback from our customers</h3>
            {reviews.map((reviewId) => (
            <RestaurantReviewContainer id = {reviewId}/>
            ))}
        </div>
    )
}

export default RestaurantReviews