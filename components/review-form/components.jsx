import {useReducer} from "react"
import Counter from "../counter/component";
import styles from './styles.module.css'
import { Button } from "../btn-change-theme/component";

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

const ReviewForm = ({initialState = DEFAULT_FORM_VALUES, onSave}) => {

    const [formValues, dispatch] = useReducer(reducer, initialState)

    
    const substractValueRating = () => {
        if(formValues.rating > 1){
            dispatch({type: 'setRating', data: formValues.rating - 0.5})
        }
    }

    const addValueRating = () => {
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
                <textarea  id = 'text' type ='text' value = {formValues.text} rows="5" cols="33"
                className = {styles.text}
                 onChange = {(event) => dispatch({type: 'setText', data: event.target.value})}></textarea>
            </div>
            <div>
                <div>
                    <Button onClick = {() => onSave?.(formValues)} className = {styles.submit}>Save</Button> 
                </div>
                <label>Rate us</label>
                <Counter value = {formValues.rating} addValueRating = {addValueRating} substractValueRating = {substractValueRating}/>
            </div>
        </div>
    )
}

export default ReviewForm