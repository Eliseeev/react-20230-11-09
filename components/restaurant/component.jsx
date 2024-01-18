import { ReviewsContainer } from "../reviews/container";
import styles from "./styles.module.css"
import { CreateReviewContainer } from "../create-review-form/container";
import { RestaurantMenuContainer } from "../restaurant-menu/container";


const Restaurant = ({restaurant}) => {

    if (!restaurant) {
        return null;
    }

    return (
        <div>
            <div className = {styles.restaurantNameBottom}>
                <h2 className = {styles.restaurantName}>{restaurant.name}</h2>
            </div>
            <div className = {styles.image_container}>
                <img src={restaurant.img} alt="Image" />
            </div>
            <RestaurantMenuContainer restaurantId={restaurant.id}/>
            <ReviewsContainer restaurantId={restaurant.id}/>
            <CreateReviewContainer restaurantId={restaurant.id}/>
        </div>
    )
}

export default Restaurant 