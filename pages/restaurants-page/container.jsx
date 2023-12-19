import { useDispatch, useSelector } from "react-redux"
import RestaurantsPage from "./components"
import { useEffect } from "react";
import { getRestaurants } from "../../redux/features/entities/restaurant/thunk/get-restaurants";
import { selectRestaurantLoadingStatus } from "../../redux/features/entities/restaurant/selectors";

export const RestaurantsPageContainer = () => {
    const dispatch = useDispatch();

    const loadingStatus = useSelector((state) => selectRestaurantLoadingStatus(state))

    useEffect(() => {
        dispatch(getRestaurants())
    }, [dispatch])

    if(loadingStatus === 'pending') return 'load'

    return <RestaurantsPage/>
}