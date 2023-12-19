import { Provider } from "react-redux";
import store from "../redux";
import { RestaurantsPageContainer } from "../pages/restaurants-page/container";

const App = () => {
    return <Provider store = {store}>
        <RestaurantsPageContainer/>
    </Provider>
}

export default App