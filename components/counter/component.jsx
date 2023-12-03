import styles from './styles.module.css'
import { useContext } from 'react'
import { ContextTheme } from '../context-theme/component'

const Counter = ({value, addValue, substractValue}) => {

    const [newTheme, setNewTheme] = useContext(ContextTheme)

    return  (
        <div>
            <button className = {`${styles.btnClick} ${(newTheme === 'newButtonStyle') ? 
            `${styles.newButtonStyle} ${styles.addModeForm}` : null}`} onClick = {substractValue}>-</button>
            {value}
            <button className = {`${styles.btnClick} ${(newTheme === 'newButtonStyle') ? 
            styles.newButtonStyle : null}`} onClick = {addValue}>+</button>
        </div>
    )
}

export default Counter