import { useCreateReviewMutation } from "../../redux/service/api"
import ReviewForm from "../review-form/components"

export const CreateReviewContainer = ({restaurantId}) => {

    const [createReview, result] = useCreateReviewMutation()

    if(result.isLoading) return 'Creating...'
    
    return <ReviewForm onSave = {(newForm) => createReview({restaurantId, newReview: {
        ...newForm, userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54"
    }})}/>
}