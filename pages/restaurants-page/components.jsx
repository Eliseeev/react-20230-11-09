import RestaurantsTabs from "../../components/restaurants-tabs/components"
import Restaurants from "../../components/restaurants/component"

const RestaurantsPage = ({restaurants}) => {
    return <>
    <RestaurantsTabs restaurants = {restaurants}/>
    <Restaurants restaurants={restaurants}/>
    </>
}

export default RestaurantsPage