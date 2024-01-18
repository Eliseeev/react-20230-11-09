import RestaurantTab from "./component";

export const RestaurantTabContainer = ({name, onClick}) => {
    if(!name) return null 

    return <RestaurantTab onClick={onClick}>{name}</RestaurantTab>
}