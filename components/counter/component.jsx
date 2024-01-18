import styles from './styles.module.css'
import { Button } from '../btn-change-theme/component'

const Counter = ({value, addValueRating, substractValueRating}) => {

    return  (
        <div>
            <Button className = {styles.btnClick} onClick = {substractValueRating}>-</Button>
            {value}
            <Button className = {styles.btnClick} onClick = {addValueRating}>+</Button>
        </div>
    )
}

export default Counter