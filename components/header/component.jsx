import styles from './styles.module.css'
import classNames from 'classnames'
import RestaurantTab from '../restaurant-tab/component'


const Header = ({className, children}) => {
    return <div className = {classNames(styles.root, className)}>{children}</div>
}

export default Header