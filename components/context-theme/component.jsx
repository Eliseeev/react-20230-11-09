import { useState, useCallback } from "react"
import { ContextTheme } from "./context"
import {DEFAULT_THEME} from "./constans";

const ProviderTheme = ({children, defaultTheme = DEFAULT_THEME}) => {
    const [context, setContext] = useState(defaultTheme);
    
    const switchTheme = useCallback(() => {
        setContext((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
    }, [])

    return (
    <ContextTheme.Provider value = {{context, switchTheme}}>
        {children}
    </ContextTheme.Provider>)
}

export default ProviderTheme