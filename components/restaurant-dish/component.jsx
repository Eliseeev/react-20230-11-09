import { useState } from "react"
import Counter from "../counter/component";
import styles from "./styles.module.css";
import classNames from "classnames";


const RestaurantDish = ({dishes, positionOfDishes, positionOfDishName, positionOfDishesBorder}) => {
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
            <div className = {classNames(styles.dishes, positionOfDishes)}>

                <div className = {classNames(styles.nameDish, positionOfDishName)}>{dishes.name}</div>
                <Counter addValue={addValue} substractValue={substractValue}
                value = {numberOfDishes}/>
                <div className = {classNames(styles.dishesBorder, positionOfDishesBorder)}></div>
            </div>
    )
}

export default RestaurantDish