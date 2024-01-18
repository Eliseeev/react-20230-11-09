import RestaurantMenu from "./component"
import { Loader } from "../loader/component"
import { useGetRestaurantQuery } from "../../redux/service/api"

export const RestaurantMenuContainer = ({restaurantId, ...props}) => {

    const {data: restaurant, isFetching} = useGetRestaurantQuery(restaurantId)

    if(isFetching) return <Loader load = {'loading'}/>
  
    return (
        <RestaurantMenu {...props} restaurant = {restaurant.menu}/>
    )
}