import Restaurant from "../restaurant/component"

const Restaurants = ({restaurants}) => {
    return (
    <div>
        {restaurants.map((restaurant) => (
            <Restaurant restaurant = {restaurant}/>
        ))}
    </div>
    );
};

export default Restaurants
