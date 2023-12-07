import Footer from "../footer/component"
import Header from "../header/component"
import ProviderTheme from "../context-theme/component"
import styles from './styles.module.css'

const Layout = ({children}) => {
    return (
        <ProviderTheme>
            <Header className = {styles.header}/>
                <main>
                    {children}
                </main>
            <Footer className = {styles.headPosition}/>   
       </ProviderTheme>)
}

export default Layout