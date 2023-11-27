import RestaurantsTabs from "../../components/restaurants-tabs/components"
// import Restaurants from "../../components/restaurants/component"
import { useState } from "react"
import Restaurant from "../../components/restaurant/component"

const RestaurantsPage = ({restaurants}) => {
    const [selectedRestaurantName, setSelectedRestaurant] = useState()
    
    const findRestaurant = restaurants.find(({name}) => name === selectedRestaurantName);

    return <>
    <RestaurantsTabs restaurants = {restaurants}
    onTabClick = {setSelectedRestaurant}/>
    <Restaurant restaurant = {findRestaurant}/>
    </>
}

export default RestaurantsPage