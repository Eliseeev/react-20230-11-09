import { useState } from "react"
import Counter from "../counter/component";

const RestaurantDish = ({dishes}) => {
    const [numberOfDishes, setNumberOfDishes] = useState(0);

    const addValue = () => {
        if(numberOfDishes < 5) {
            setNumberOfDishes(numberOfDishes + 1)
        }
    }

    const substractValue = () => {
        if(numberOfDishes > 0){
            setNumberOfDishes(numberOfDishes - 1)
        }
    }
   
    return (
            <div>
                <div>{dishes.name}</div>
                <Counter addValue={addValue} substractValue={substractValue}
                value = {numberOfDishes}/>
            </div>
    )
}

export default RestaurantDish