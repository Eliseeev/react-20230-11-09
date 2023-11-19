const RestaurantsHead = ({restaurants}) => {
    return <div>
        {restaurants.map(({name}) => <button>{name}</button>)}
    </div>
}

export default RestaurantsHead