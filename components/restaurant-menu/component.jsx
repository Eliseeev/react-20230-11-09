import RestaurantDish from "../restaurant-dish/component"

const RestaurantMenu = ({dishes}) => {
    return (
        <div>
            <h3>Menu</h3>
            {dishes.map((dish) => (
            <RestaurantDish dishes = {dish}/>
            ))}
        </div>
    )
}

export default RestaurantMenu