import styles from './styles.module.css'
import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/features/entities/users/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../redux/features/entities/users/thunk/get-users';


const RestaurantReview = ({review}) => {
    const user = useSelector((state) => selectUserById(state, review.userId))

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    if(!review || !user) {
        return null
    }

    return (
        <div>
            <div className = {styles.reviewText}>{user.name} - {review.text}</div>
        </div>
    )
}

export default RestaurantReview