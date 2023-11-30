import RestaurantMenu from "../restaurant-menu/component"
import RestaurantReviews from "../restaurant-reviews/components"
import ReviewForm from "../review-form/components";
import styles from "./styles.module.css"

const Restaurant = ({restaurant}) => {

    if (!restaurant) {
        return null;
    }

    return (
        <div>
            <div className = {styles.restaurantNameBottom}><h2 className = {styles.restaurantName}>{restaurant.name}</h2></div>
            <RestaurantMenu dishes = {restaurant.menu}/>
            <RestaurantReviews reviews = {restaurant.reviews}/>
            <ReviewForm/>
        </div>
    )
}

export default Restaurant 