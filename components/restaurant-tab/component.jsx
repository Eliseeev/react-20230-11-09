import styles from './styles.module.css'

const RestaurantTab = ({children, onClick}) => {
    return  <button className = {styles.btnTab} onClick = {onClick}>{children}</button>         
}

export default RestaurantTab