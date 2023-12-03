import { useContext } from "react";
import ContextTheme from "./component";

const useTheme = () => {
    return useContext(ContextTheme)
}

export default useTheme