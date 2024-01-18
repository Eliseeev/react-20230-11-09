import RestaurantsTabs from "./components"
import { Loader } from "../loader/component";
import { useGetRestaurantsQuery } from "../../redux/service/api";

export const RestaurantTabsContainer = ({onTabClick}) => {
    const {data: restaurants, isLoading} = useGetRestaurantsQuery()

    if(isLoading) return <Loader load = {'loading'}/>

    return (
        <RestaurantsTabs restaurants = {restaurants} onTabClick={onTabClick}/>
    )
}