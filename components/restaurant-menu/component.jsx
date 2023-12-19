import styles from './styles.module.css'
import { RestaurantDishContainer } from "../restaurant-dish/container"

const RestaurantMenu = ({dishIds}) => {
    return (
        <div>
            <h3 className = {styles.restaurantMenuHeader}>Menu</h3>
            {dishIds.map((id) => (
            <RestaurantDishContainer dishId = {id} positionOfDishes = {styles.positionOfDishes}
            positionOfDishName = {styles.positionOfDishName} positionOfDishesBorder = {styles.positionOfDishesBorder}/>
            ))}
        </div>
    )
}

export default RestaurantMenu