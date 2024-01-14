import { useSelector } from "react-redux"
import { selectRestaurants } from "../../redux/features/entities/restaurant/selectors"
import { RestaurantTabContainer } from "../restaurant-tab/container"


const RestaurantsTabs = ({ onTabClick }) => {
    const restaurants = useSelector(selectRestaurants)
    return (
    <div>
        {Object.values(restaurants).map(({id}) => (
        <RestaurantTabContainer restaurantId = {id} onClick = {() => onTabClick(id)}/>
        ))}
    </div>)
}

export default RestaurantsTabs
