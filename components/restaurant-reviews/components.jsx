import RestaurantReview from "../restaurant-review/component"

const RestaurantReviews = ({reviews}) => {
    return (
        <div>
            <h3>Reviews</h3>
            {reviews.map((review) => (
            <RestaurantReview reviews = {review}/>
            ))}
        </div>
    )
}

export default RestaurantReviews