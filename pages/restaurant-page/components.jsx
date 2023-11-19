import RestaurantsHead from "../../components/restaurants-head/component"
import RestaurantsBody from "../../components/restaurants-body/component"

const RestaurantsPage = ({restaurants}) => {
    return <>
    <RestaurantsHead restaurants = {restaurants}/>
    <RestaurantsBody restaurants = {restaurants}/>
    </>
}

export default RestaurantsPage