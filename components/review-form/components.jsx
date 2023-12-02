import {useReducer} from "react"
import Counter from "../counter/component";
import styles from './styles.module.css'

const DEFAULT_FORM_VALUES = {
    name: '',
    text: '',
    rating: 1,
}

function reducer(state, action){
    switch(action.type){
        case 'setName': return {...state, name: action.data, 
            text: DEFAULT_FORM_VALUES.text,
            rating: DEFAULT_FORM_VALUES.rating
            }
        case 'setText': return {...state, text: action.data}
        case 'setRating': return {...state, rating: action.data}
        default: {
            return state
        }
    }
}

const ReviewForm = () => {

    const [formValues, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUES)

    const substractValue = () => {
        if(formValues.rating > 1){
            dispatch({type: 'setRating', data: formValues.rating - 0.5})
        }
    }

    const addValue = () => {
        if(formValues.rating < 5) {
            dispatch({type: 'setRating', data: formValues.rating + 0.5})
        }
    }
    
    return (
        <div className = {styles.parent}>
            <div>
                <div className = {styles.ratingBorder}></div>
                <h3 className = {styles.restaurantRating}>Please leave your feedback</h3>
                <label name = 'name' className = {styles.formUser}>Name</label>
                <input  id = 'name' type ='text' value = {formValues.name}
                className = {styles.name}
                onChange = {(event) => dispatch({type: 'setName', data: event.target.value})}></input>
            </div>
            <div>
                <label name = 'name' className = {styles.formUser}>Text</label>
                <input  id = 'text' type ='text' value = {formValues.text}
                className = {styles.text}
                 onChange = {(event) => dispatch({type: 'setText', data: event.target.value})}></input>
            </div>
            <div>
                <label>Rate us</label>
                <Counter value = {formValues.rating} addValue = {addValue} substractValue = {substractValue}/>
            </div>
        </div>
    )
}

export default ReviewForm