import RestaurantsTabs from "../../components/restaurants-tabs/components"
import { useState } from "react"
import Restaurant from "../../components/restaurant/component"
import styles from '/pages/restaurants-page/styles.module.css'
import Header from "../../components/header/component"
import Footer from "../../components/footer/component"



const RestaurantsPage = ({restaurants}) => {
    const [selectedRestaurantName, setSelectedRestaurant] = useState()
    
    const findRestaurant = restaurants.find(({name}) => name === selectedRestaurantName);
    
    return (
    <div className = {styles.mainPage}>
        <Header>
            <RestaurantsTabs restaurants = {restaurants}
                onTabClick = {setSelectedRestaurant}/>
        </Header>
            <Restaurant restaurant = {findRestaurant}/>
        <Footer/>
    </div>
    )
}

export default RestaurantsPage