import { Button } from '../btn-change-theme/component';
import ProviderTheme from '../context-theme/component';
import { useTheme } from '../context-theme/hook';
import styles from './styles.module.css'
import classNames from 'classnames';


const Header = ({className}) => {
    const {switchTheme} = useTheme()

    return (
        <div className = {classNames(styles.root, className)}>
            <ProviderTheme>
                <Button onClick={switchTheme}>Change theme</Button>
                {/* <button className = {styles.orderBtn}>Order</button> */}
                <div className = {styles.mainLogo}>
                    <p>Antoine Karem</p>
                </div>
            </ProviderTheme>
        </div>
    )
}

export default Header