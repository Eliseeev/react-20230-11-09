import RestaurantMenu from "../restaurant-menu/component"
import RestaurantReviews from "../restaurant-reviews/components"
import { useState } from "react"

const Restaurant = ({restaurant}) => {
    return <div>
        <h2>{restaurant.name}</h2>
        <RestaurantMenu dishes = {restaurant.menu}/>
        <RestaurantReviews reviews = {restaurant.reviews}/>
    </div>
}

export default Restaurant