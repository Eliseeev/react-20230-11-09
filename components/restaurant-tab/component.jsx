import styles from './styles.module.css'

const RestaurantTab = ({children, onClick}) => {
    return  <button className = {styles.btnTab} onClick = {onClick}><p className = {styles.textTab}>{children}</p></button>
}

export default RestaurantTab