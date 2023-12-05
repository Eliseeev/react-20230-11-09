import RestaurantReview from "../restaurant-review/component"
import styles from './styles.module.css'

const RestaurantReviews = ({reviews}) => {
    return (
        <div>
            <div className = {styles.border}></div>
            <h3 className = {styles.reviewsName}>Feedback from our customers</h3>
            {reviews.map((review) => (
            <RestaurantReview reviews = {review}/>
            ))}
        </div>
    )
}

export default RestaurantReviews