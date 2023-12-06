import { useContext } from "react"
import { ContextTheme } from "./context"

export function useTheme() {
    return useContext(ContextTheme)
}
