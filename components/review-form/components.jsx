import {useState, useReducer} from "react"
import Counter from "../counter/component";

const ReviewForm = () => {

    const DEFAULT_FORM_VALUES = {
        name: '',
        text: '',
    }

    function reducer(state, action){
        switch(action.type){
            case 'setName': return {...state, name: action.data, 
                text: DEFAULT_FORM_VALUES.text,
                }
            case 'setText': return {...state, text: action.data}
            default: {
                return state
            }
        }
    }

    const [restaurantRating, setRestaurantRating] = useState(0);
    const [formValues, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUES)
 
    const addValue = () => {
        if(restaurantRating < 5) {
            setRestaurantRating(restaurantRating + 0.5)
        }
    }

    const substractValue = () => {
        if(restaurantRating > 1){
            setRestaurantRating(restaurantRating - 0.5)
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
                <Counter value = {restaurantRating} addValue = {addValue} substractValue = {substractValue}/>
            </div>
        </div>
    )
}

export default ReviewForm