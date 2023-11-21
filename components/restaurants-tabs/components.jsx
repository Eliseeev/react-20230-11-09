import RestaurantTab from "../restaurant-tab/component"

const RestaurantsTabs = ({restaurants, onTabClick}) => {
    return <div>
        {restaurants.map(({name}, index) => <RestaurantTab onClick = {() => onTabClick(index)}>
        {name}
        </RestaurantTab>)}
    </div>
}

export default RestaurantsTabs
