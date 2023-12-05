import styles from './styles.module.css'
import classNames from 'classnames'

const Footer = ({children, className}) => {
    return <div className = {classNames(styles.root, className)}>{children}</div>
}

export default Footer