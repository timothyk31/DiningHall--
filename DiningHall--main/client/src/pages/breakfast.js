import { FoodCard } from "../components/foodCard.js"

export const Breakfast = () => {
    const hideArray = ["Roasted Tomatoes"]

    return (
        <>
        <h1 className="meal-title">Today's Breakfast Items</h1>
        <div className="foodCards">
            <FoodCard mealType="Breakfast" hideArray={hideArray[0]}/>
        </div>
        </>
    )
}