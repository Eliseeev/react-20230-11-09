import { useState } from "react"

const RestaurantDish = ({dishes}) => {
    const [numberOfDishes, setNumberOfDishes] = useState(0);
   
    const addDish = () => setNumberOfDishes(numberOfDishes + 1)
    const substractDish = () => setNumberOfDishes(numberOfDishes - 1)

    if(numberOfDishes < 0) setNumberOfDishes(0)
    else if (numberOfDishes > 5) setNumberOfDishes(5)

    return (
        <div>
            <div>{dishes.name}
                <button onClick = {substractDish}>-</button>
                {numberOfDishes}
                <button onClick = {addDish}>+</button>
            </div>
        </div>
    )
}

export default RestaurantDish