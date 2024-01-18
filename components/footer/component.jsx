import styles from './styles.module.css'
import classNames from 'classnames'

const Footer = ({className}) => {
    return <div className = {classNames(styles.root, className)}>
        <button className={styles.contactsBtn}>Contacts</button>
        <div ClassName = {styles.messages}>
          <p>Stay Connected</p>

        </div>
        <div className = {styles.policy}>
            <p>©2024 Antoine Karem IP Holder, LLC. All Rights Reserved.</p>
        </div>
    </div>
}

export default Footer