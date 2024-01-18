import Restaurant from "./component"
import { useGetRestaurantsQuery } from "../../redux/service/api"


const getRestaurantFromResult = (result, restaurantId) => {
    return {...result, data: result?.data?.find(({id}) => id === restaurantId)}
}

export const RestaurantContainer = ({restaurantId}) => {
    
    const {data: restaurant, isError, isLoading} = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => {
            return getRestaurantFromResult(result, restaurantId)
        }
    })

    if(isError) return 'Error'
    
    return (
        <Restaurant restaurant = {restaurant} />
    )
}
