import styles from './styles.module.css'
import { useTheme } from '../context-theme/hook'
import classNames from 'classnames'

export const Button = ({children, onClick}) => {
    const {context} = useTheme()

    return (
        <button className = {classNames(styles.changeThemeBtn, {
            [styles.dark] : context === 'dark',
            [styles.light] : context === 'light',
        })} onClick = {onClick}>{children}</button>
    )
}