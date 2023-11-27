const Counter = ({value, addValue, substractValue}) => {
    
    return  (
    <div>
        <button onClick = {substractValue}>-</button>
        {value}
        <button onClick = {addValue}>+</button>
    </div>)
}

export default Counter