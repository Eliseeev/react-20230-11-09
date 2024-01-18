import { useState } from "react"
import Counter from "../counter/component";
import styles from "./styles.module.css";
import classNames from "classnames";


const RestaurantDish = ({dish, positionOfDishes, positionOfDishName, positionOfDishesBorder}) => {

    const [numberOfDishes, setNumberOfDishes] = useState(0);

     if(!dish) {
        return null;
      }

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

                <div className = {classNames(styles.nameDish, positionOfDishName)}>{dish.name}</div>
                <Counter addValueRating = {addValue} substractValueRating = {substractValue}
                value = {numberOfDishes}/>
                <div className = {classNames(styles.dishesBorder, positionOfDishesBorder)}></div>
            </div>
    )
}

export default RestaurantDish