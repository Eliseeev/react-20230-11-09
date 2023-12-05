import Footer from "../footer/component"
import Header from "../header/component"
import styles from './styles.module.css'

const Layout = ({children}) => {
    return <div>
        <Header className = {styles.headerPosition} children={children}/>
        <Footer/>
    </div>
}

export default Layout