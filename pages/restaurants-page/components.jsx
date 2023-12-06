import RestaurantsTabs from "../../components/restaurants-tabs/components"
import { useState } from "react"
import Restaurant from "../../components/restaurant/component"
import styles from '/pages/restaurants-page/styles.module.css'
import Layout from "../../components/layout/component"


const RestaurantsPage = ({restaurants}) => {
    const [selectedRestaurantName, setSelectedRestaurant] = useState()
 
    const findRestaurant = restaurants.find(({name}) => name === selectedRestaurantName);

    return (
    <div className = {styles.mainPage}>
            <Layout>
                <RestaurantsTabs restaurants = {restaurants} onTabClick = {setSelectedRestaurant}/>
                <Restaurant restaurant = {findRestaurant}/>
           </Layout>
    </div>
    )
}

export default RestaurantsPage