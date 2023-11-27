import {useState, useReducer} from "react"
import Counter from "../counter/component";


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
        <div>
            <div>
                <h3>Restaurant rating</h3>
                <label name = 'name'>Name</label>
                <input  id = 'name' type ='text' value = {formValues.name}
                onChange = {(event) => dispatch({type: 'setName', data: event.target.value})}></input>
            </div>
            <div>
                <label name = 'name'>Text</label>
                <input  id = 'text' type ='text' value = {formValues.text}
                 onChange = {(event) => dispatch({type: 'setText', data: event.target.value})}></input>
            </div>
            <div>
                <label>Rating</label>
                <Counter value = {formValues.rating} addValue = {addValue} substractValue = {substractValue}/>
            </div>
        </div>
    )
}

export default ReviewForm