import RestaurantReview from "../restaurant-review/component"
import styles from './styles.module.css'

const RestaurantReviews = ({reviews}) => {
    return (
        <div>
            <div className = {styles.border}></div>
            <h3 className = {styles.reviewsName}><div className = {styles.redAttribute}><span className={styles.fistLetterReview}>R</span>views</div></h3>
            {reviews.map((review) => (
            <RestaurantReview reviews = {review}/>
            ))}
        </div>
    )
}

export default RestaurantReviews