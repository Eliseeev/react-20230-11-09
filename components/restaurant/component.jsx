import RestaurantReviews from "../restaurant-reviews/components"
import ReviewForm from "../review-form/components";
import styles from "./styles.module.css"
import { RestaurantMenuContainer } from "../restaurant-menu/container";
import { RestaurantReviewsContainer } from "../restaurant-reviews/container";

const Restaurant = ({restaurant}) => {
    
    if (!restaurant) {
        return null;
    }

    return (
        <div>
            <div className = {styles.restaurantNameBottom}><h2 className = {styles.restaurantName}>{restaurant.name}</h2></div>
            <RestaurantMenuContainer restaurantId={restaurant.id}/>
            <RestaurantReviewsContainer restaurantId = {restaurant.id}/>
            <ReviewForm/>
        </div>
    )
}

export default Restaurant 