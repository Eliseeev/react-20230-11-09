import { useSelector } from "react-redux"
import { selectRestaurants } from "../../redux/features/entities/restaurant/selectors"
import { RestaurantTabContainer } from "../restaurant-tab/container"


const RestaurantsTabs = ({ onTabClick, restaurants }) => {

    if(!restaurants) return null
    
    return (
    <div>
        {restaurants.map(({id, name}) => (
        <RestaurantTabContainer name = {name} onClick = {() => onTabClick(id)}/>
        ))}
    </div>)
}

export default RestaurantsTabs
