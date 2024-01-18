import RestaurantDish from "./component"
import { useGetDishQuery } from "../../redux/service/api"
import { Loader } from "../loader/component"

export const RestaurantDishContainer = ({dishId, ...props}) => {
    const {data: dish, isLoading, isError, isFetching} = useGetDishQuery(dishId)

    if(isFetching) return <Loader load = {'loading'}/>

    return (
        <RestaurantDish {...props} dish = {dish}/>
    )
}