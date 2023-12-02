import RestaurantTab from "../restaurant-tab/component"

const RestaurantsTabs = ({restaurants, onTabClick}) => {

    return (
    <div>
        {restaurants.map(({name}, index) => (
        <RestaurantTab onClick = {() => onTabClick(name)}>
            {name}
        </RestaurantTab>
        ))}
    </div>)
}

export default RestaurantsTabs
