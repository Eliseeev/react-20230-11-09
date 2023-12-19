import { useDispatch, useSelector } from "react-redux"
import RestaurantMenu from "./component"
import { selectRestaurantsDishIds } from "../../redux/features/entities/restaurant/selectors"
import { useEffect } from "react"
import { getDishes } from "../../redux/features/entities/dish/thunk/get-dishes"

export const RestaurantMenuContainer = ({restaurantId, ...props}) => {
    const restaurantDishIds = useSelector((state) => selectRestaurantsDishIds(state, restaurantId))
    
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getDishes(restaurantId));
    }, [dispatch, restaurantId]);
  
    return (
        <RestaurantMenu {...props} dishIds = {restaurantDishIds}/>
    )
}