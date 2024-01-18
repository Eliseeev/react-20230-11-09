import { useEffect } from "react";
import { useUpdateReviewMutation } from "../../redux/service/api"
import ReviewForm from "../review-form/components"

export const UpdateReviewContainer = ({review, onUpdateFinished}) => {

    const [updateReview, result] = useUpdateReviewMutation()
    console.log(result)

    const isUpdateFinished = result.isSuccess;

    useEffect(() => {
        if(isUpdateFinished) return onUpdateFinished()
    }, [isUpdateFinished, onUpdateFinished])

    if(result.isLoading) return 'Creating...'

    
    return <ReviewForm 
    initialState={review}
    onSave = {(updated) => updateReview({reviewId: review.id, review: {...review, ...updated}})}/>
}