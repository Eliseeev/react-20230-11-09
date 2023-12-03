import RestaurantsTabs from "../../components/restaurants-tabs/components"
import { useState } from "react"
import Restaurant from "../../components/restaurant/component"
import styles from '/pages/restaurants-page/styles.module.css'
import Header from "../../components/header/component"
import Footer from "../../components/footer/component"
import { ContextTheme } from "../../components/context-theme/component"


const RestaurantsPage = ({restaurants}) => {
    const [selectedRestaurantName, setSelectedRestaurant] = useState()
    const [newTheme, setNewTheme] = useState('')
 
    const findRestaurant = restaurants.find(({name}) => name === selectedRestaurantName);

    return (
    <div className = {styles.mainPage}>
        <ContextTheme.Provider value = {[newTheme, setNewTheme]}>
            <Header>
                <RestaurantsTabs restaurants = {restaurants} onTabClick = {setSelectedRestaurant}/>
                <button className = {styles.orderBtn}>Order</button>
                <button className = {styles.changeThemeBtn} onClick = {() => {setNewTheme('newButtonStyle')}}>Change Theme</button>
            </Header>
                <Restaurant restaurant = {findRestaurant}/>
        <Footer><button className={styles.contactsBtn}>Contacts</button></Footer>
       </ContextTheme.Provider>
    </div>
    )
}

export default RestaurantsPage