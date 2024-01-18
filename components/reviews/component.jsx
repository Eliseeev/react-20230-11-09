import { Review } from "../review/component"
import styles from './styles.module.css'

export const Reviews = ({reviews}) => {
    if(!reviews) return null

    return <div>
        <div className = {styles.border}></div>
            <h3 className = {styles.reviewsName}>Feedback from our customers</h3>
        {reviews.map((review) => <Review review={review}/>)}
    </div>
}