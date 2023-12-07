import styles from './styles.module.css'
import { selectReviewById } from '../../redux/features/entities/reviews/selectors';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/features/entities/users/selectors';


const RestaurantReview = ({id}) => {
  
    const review = useSelector((state) => selectReviewById(state, id))
    const user = useSelector((state) => selectUserById(state, review.userId))

    if(!review) {
        return null
    }

    return (
        <div>
            <div className = {styles.reviewText}>{user.name} - {review.text}</div>
        </div>
    )
}

export default RestaurantReview