import { FoodCard } from "../components/foodCard.js"
export const Lunch = () => {
    return (
        <>
        <h1 className="meal-title">Today's Lunch Items</h1>
        <div className="foodCards">
            <FoodCard mealType="Lunch"/>
        </div>
        </>
    )
}