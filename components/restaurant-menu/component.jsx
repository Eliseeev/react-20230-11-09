import RestaurantDish from "../restaurant-dish/component"
import styles from './styles.module.css'

const RestaurantMenu = ({dishes}) => {
    return (
        <div>
            <h3 className = {styles.restaurantMenuHeader}>Menu</h3>
            {dishes.map((dish) => (
            <RestaurantDish dishes = {dish} positionNameOfDish = {styles.positionNameOfDish} 
            positionOfDishes = {styles.postitonOfDishes} positionOfDishBorder = {styles.positionOfDishBorder}/>
            ))}
        </div>
    )
}

export default RestaurantMenu