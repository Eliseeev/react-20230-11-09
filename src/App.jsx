import RestaurantsPage from "../pages/restaurants-page/components"
import './styles/index.css'

const App = ({restaurants}) => {
    return <RestaurantsPage restaurants = {restaurants}/>
}

export default App