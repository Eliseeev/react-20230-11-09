import RestaurantsTabs from "../../components/restaurants-tabs/components"
import { useState } from "react"
import styles from '/pages/restaurants-page/styles.module.css'
import Layout from "../../components/layout/component"
import { RestaurantContainer } from "../../components/restaurant/container"



const RestaurantsPage = () => {
    const [selectedRestaurantId, setSelectedRestaurant] = useState(0);
    
    return (
    <div className= {styles.mainPage}>
            <Layout>
                <RestaurantsTabs onTabClick = {setSelectedRestaurant}/>
                <RestaurantContainer restaurantId = {selectedRestaurantId}/>
           </Layout>
    </div>
    )
}

export default RestaurantsPage