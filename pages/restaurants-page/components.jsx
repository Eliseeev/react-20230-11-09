import RestaurantsTabs from "../../components/restaurants-tabs/components"
import { useState } from "react"
import Restaurant from "../../components/restaurant/component"
import styles from '/pages/restaurants-page/styles.module.css'

const RestaurantsPage = ({restaurants}) => {
    const [selectedRestaurantName, setSelectedRestaurant] = useState()
    
    const findRestaurant = restaurants.find(({name}) => name === selectedRestaurantName);
    
    return (<div className = {styles.mainPage}>
    <RestaurantsTabs restaurants = {restaurants}
    onTabClick = {setSelectedRestaurant}/>
    <Restaurant restaurant = {findRestaurant}/>
    </div>)
}

export default RestaurantsPage