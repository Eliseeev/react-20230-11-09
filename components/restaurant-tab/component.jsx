import styles from './styles.module.css'
import { Button } from '../btn-change-theme/component'

const RestaurantTab = ({children, onClick}) => {
    return  <Button className = {styles.btnTab} onClick = {onClick}>{children}</Button>         
}

export default RestaurantTab