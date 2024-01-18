import styles from './styles.module.css'

export const Loader = ({load}) => {
    if(load !== 'loading') return null

    return <div className = {styles.loadParent}>
        <div className = {styles.loadChild}></div>
    </div>
}