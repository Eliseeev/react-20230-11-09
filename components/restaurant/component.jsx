import { useSelector } from "react-redux";
import RestaurantMenu from "../restaurant-menu/component"
import RestaurantReviews from "../restaurant-reviews/components"
import ReviewForm from "../review-form/components";
import styles from "./styles.module.css"
import { selectRestaurantById } from "../../redux/features/entities/restaurant/selectors";

const Restaurant = ({restaurantId}) => {
    if(!restaurantId) return null
    
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
    
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