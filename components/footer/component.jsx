import styles from './styles.module.css'
import classNames from 'classnames'

const Footer = ({className}) => {
    return <div className = {classNames(styles.root, className)}>
        <button className={styles.contactsBtn}>Contacts</button>
    </div>
}

export default Footer