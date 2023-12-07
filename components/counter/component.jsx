import styles from './styles.module.css'
import { Button } from '../btn-change-theme/component'

const Counter = ({value, addValue, substractValue}) => {

    return  (
        <div>
            <Button className = {styles.btnClick} onClick = {substractValue}>-</Button>
            {value}
            <Button className = {styles.btnClick} onClick = {addValue}>+</Button>
        </div>
    )
}

export default Counter