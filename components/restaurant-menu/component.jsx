import styles from './styles.module.css'
import { RestaurantDishContainer } from "../restaurant-dish/container"

const RestaurantMenu = ({restaurant}) => {
    if(!restaurant) return null

    return (
        <div>
            <h3 className = {styles.restaurantMenuHeader}>Menu</h3>
            {restaurant.map((item) => (
            <RestaurantDishContainer dishId = {item} positionOfDishes = {styles.positionOfDishes}
            positionOfDishName = {styles.positionOfDishName} positionOfDishesBorder = {styles.positionOfDishesBorder}/>
            ))}
        </div>
    )
}

export default RestaurantMenu