import RestaurantDish from "../restaurant-dish/component"
import styles from './styles.module.css'

const RestaurantMenu = ({dishes}) => {
    return (
        <div>
            <h3 className = {styles.restaurantMenuHeader}><div className = {styles.redAttribute}><span className={styles.fistLetter}>M</span>enu</div></h3>
            {dishes.map((dish) => (
            <RestaurantDish dishes = {dish}/>
            ))}
        </div>
    )
}

export default RestaurantMenu