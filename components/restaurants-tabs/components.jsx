import { useSelector } from "react-redux"
import RestaurantTab from "../restaurant-tab/component"
import { selectRestaurants } from "../../redux/features/entities/restaurant/selectors"


const RestaurantsTabs = ({ onTabClick }) => {
    const restaurants = useSelector(selectRestaurants)

    return (
    <div>
        {Object.values(restaurants).map(({name}) => (
        <RestaurantTab onClick = {() => onTabClick(name)}>
            {name}
        </RestaurantTab>
        ))}
    </div>)
}

export default RestaurantsTabs
