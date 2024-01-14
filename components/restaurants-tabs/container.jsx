import { useSelector } from "react-redux"
import RestaurantsTabs from "./components"
import { selectRestaurantIds } from "../../redux/features/entities/restaurant/selectors"

export const RestaurantTabsContainer = ({onTabClick}) => {
    const restaurantIds = useSelector(selectRestaurantIds)
    return (
        <RestaurantsTabs restaurantsIds = {restaurantIds} onTabClick={onTabClick}/>
    )
}