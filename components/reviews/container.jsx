import { useGetReviewsQuery } from "../../redux/service/api"
import { Reviews } from "./component"
import { Loader } from "../loader/component"

export const ReviewsContainer = ({restaurantId}) => {
    const {data: reviews, isLoading, isError, isFetching} = useGetReviewsQuery(restaurantId)
    
    if(isFetching) return <Loader load = {'loading'}/>
    if(isError) return 'Error'

    return <Reviews reviews={reviews}/>
}
