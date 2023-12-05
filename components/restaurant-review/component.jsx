import styles from './styles.module.css'

const RestaurantReview = ({reviews}) => {
    return (
        <div>
            <div className = {styles.reviewText}>{reviews.text}</div>
        </div>
    )
}

export default RestaurantReview