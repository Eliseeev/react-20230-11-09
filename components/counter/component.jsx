import styles from './styles.module.css'

const Counter = ({value, addValue, substractValue}) => {
    
    return  (
    <div>
        <button className = {styles.btnClick} onClick = {substractValue}>-</button>
        {value}
        <button className = {styles.btnClick} onClick = {addValue}>+</button>
    </div>)
}

export default Counter