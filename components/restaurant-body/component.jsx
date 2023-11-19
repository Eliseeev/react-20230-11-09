import RestaurantName from "../restaurant-name/component"
import RestaurantsMenu from "../restaurants-menu/component"
import RestaurantReviews from "../restaurant-review/component"

const RestaurantBody = ({restaurants}) => {
    return <div>
    {restaurants.map((item) => <div>
        <h2>Restaurant name</h2>
            <RestaurantName name = {item.name}/>
        <h4>Menu</h4>
        <ul>
            {item.menu.map((item) => <RestaurantsMenu restaurantsMenu = {item.name}/>)}
        </ul>
        <h3>Reviews</h3>
        <ul>
            {item.reviews.map((item) => <RestaurantReviews reviews = {item.text}/>)} 
        </ul>
        </div>)}
</div>
}

export default RestaurantBody