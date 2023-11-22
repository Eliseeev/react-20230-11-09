import RestaurantsTabs from "../../components/restaurants-tabs/components"
import Restaurants from "../../components/restaurants/component"
import { useState } from "react"

const RestaurantsPage = ({restaurants}) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState()

    const filteredRestaurant = restaurants.filter(
        ({name}) => name === selectedRestaurant
    );

    console.log(filteredRestaurant)
    
    return <>
    <RestaurantsTabs restaurants = {restaurants}
    onTabClick = {setSelectedRestaurant}/>
    <Restaurants restaurants={filteredRestaurant}/>
    </>
}

export default RestaurantsPage