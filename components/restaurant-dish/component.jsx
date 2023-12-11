import { useState } from "react"
import Counter from "../counter/component";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/features/entities/dishes/selectors";


const RestaurantDish = ({id, positionOfDishes, positionOfDishName, positionOfDishesBorder}) => {

   const dish = useSelector((state) => selectDishById(state, id))

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

                <div className = {classNames(styles.nameDish, positionOfDishName)}>{dish.name}</div>
                <Counter addValue={addValue} substractValue={substractValue}
                value = {numberOfDishes}/>
                <div className = {classNames(styles.dishesBorder, positionOfDishesBorder)}></div>
            </div>
    )
}

export default RestaurantDish