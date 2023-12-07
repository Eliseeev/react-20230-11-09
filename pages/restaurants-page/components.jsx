import RestaurantsTabs from "../../components/restaurants-tabs/components"
import { useState } from "react"
import Restaurant from "../../components/restaurant/component"
import styles from '/pages/restaurants-page/styles.module.css'
import Layout from "../../components/layout/component"
import { useSelector } from "react-redux"
import { selectRestaurants } from "../../redux/features/entities/restaurant/selectors"


const RestaurantsPage = () => {
    const [selectedRestaurantName, setSelectedRestaurant] = useState();

    const restaurants = useSelector((state) => selectRestaurants(state))
 
    const id = Object.values(restaurants).find(({name}) => name === selectedRestaurantName);
  

    return (
    <div className= {styles.mainPage}>
            <Layout>
                <RestaurantsTabs onTabClick = {setSelectedRestaurant}/>
                <Restaurant id = {id}/>
           </Layout>
    </div>
    )
}

export default RestaurantsPage