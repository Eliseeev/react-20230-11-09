import RestaurantDish from "../restaurant-dish/component"
import styles from './styles.module.css'

const RestaurantMenu = ({dishes}) => {
    return (
        <div>
            <h3 className = {styles.restaurantMenuHeader}>Menu</h3>
            {dishes.map((dish) => (
            <RestaurantDish id = {dish} positionOfDishes = {styles.positionOfDishes}
            positionOfDishName = {styles.positionOfDishName} positionOfDishesBorder = {styles.positionOfDishesBorder}/>
            ))}
        </div>
    )
}

export default RestaurantMenu