import { useState } from "react"
import styles from '/pages/restaurants-page/styles.module.css'
import Layout from "../../components/layout/component"
import { RestaurantContainer } from "../../components/restaurant/container"
import { RestaurantTabsContainer } from "../../components/restaurants-tabs/container"


const RestaurantsPage = () => {
    const [selectedRestaurantId, setSelectedRestaurant] = useState(0);

    return (
    <div className= {styles.mainPage}>
            <Layout>
                <RestaurantTabsContainer onTabClick = {setSelectedRestaurant}/>
                <RestaurantContainer restaurantId = {selectedRestaurantId}/>
           </Layout>
    </div>
    )
}

export default RestaurantsPage