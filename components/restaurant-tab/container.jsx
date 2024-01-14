import { useSelector } from "react-redux";
import RestaurantTab from "./component";
import { selectRestaurantById } from "../../redux/features/entities/restaurant/selectors";

export const RestaurantTabContainer = ({restaurantId, onClick}) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId))

    return <RestaurantTab onClick={onClick}>{restaurant?.name}</RestaurantTab>
}