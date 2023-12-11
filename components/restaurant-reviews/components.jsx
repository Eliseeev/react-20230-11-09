import { useSelector } from "react-redux"
import RestaurantReview from "../restaurant-review/component"
import styles from './styles.module.css'

const RestaurantReviews = ({reviews}) => {

    return (
        <div>
            <div className = {styles.border}></div>
            <h3 className = {styles.reviewsName}>Feedback from our customers</h3>
            {reviews.map((reviewId) => (
            <RestaurantReview id = {reviewId}/>
            ))}
        </div>
    )
}

export default RestaurantReviews