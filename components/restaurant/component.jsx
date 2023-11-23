import RestaurantMenu from "../restaurant-menu/component"
import RestaurantReviews from "../restaurant-reviews/components"


const Restaurant = ({restaurant}) => {

    if (!restaurant) {
        return null;
    }

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <RestaurantMenu dishes = {restaurant.menu}/>
            <RestaurantReviews reviews = {restaurant.reviews}/>
        </div>
    )
}

export default Restaurant 