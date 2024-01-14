import { useSelector } from "react-redux"
import RestaurantDish from "./component"
import { selectDishById } from "../../redux/features/entities/dish/selectors"

export const RestaurantDishContainer = ({dishId, ...props}) => {
    const dish = useSelector((state) => selectDishById(state, dishId))
    return (
        <RestaurantDish {...props} dish = {dish}/>
    )
}