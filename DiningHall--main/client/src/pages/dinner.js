import { FoodCard } from "../components/foodCard.js"
export const Dinner = () => {
    return (
        <>
        <h1 className="meal-title">Today's Dinner Items</h1>
        <div className="foodCards">
            <FoodCard mealType="Dinner"/>
        </div>
        </>
    )
}