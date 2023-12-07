import { Provider } from "react-redux";
import RestaurantsPage from "../pages/restaurants-page/components";
import store from "../redux";

const App = ({restaurants}) => {

    return <Provider store = {store}>
        <RestaurantsPage restaurants = {restaurants}/>
    </Provider>
}

export default App