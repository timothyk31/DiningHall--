import axios from "axios"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export const FoodCard = (props) => {

    const [savedFoods, setSavedFoods] = useState([]);
  
    useEffect(() => {
      const fetchSavedFoods = async () => {
        try {
          const response = await axios.get(
            `http://localhost:${5000}/food/`
          );
          setSavedFoods(response.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchSavedFoods();
    },[]);

    const displayInfo = (event, info) => {
      alert(info)
    }

// const ratings = 
let avgRating = []
    return (
<div className="cards">
  
  {savedFoods.map((foodItem) =>
    (foodItem.mealType == props.mealType && Number(foodItem.nutritionalInfo[0].slice(10)) > 100)  ? (
      
      <div className="card" key={foodItem._id}>
        <div className="name">{foodItem.name}</div>
        <div className="station">{foodItem.station}</div>
        <p className="calories">{foodItem.nutritionalInfo[0]}</p>
        <p className="calories">Portion: {foodItem.portion}</p>
        <div className="rating-wrapper">
          <div className="otherRating-wrapper">
            
        {foodItem.reviews.map((review) => {
          avgRating.push(review.rating)
          console.log(avgRating)
            })}
            <div className="rating2">{((avgRating.reduce((a, b) => a + b, 0)) / avgRating.length) ? ((avgRating.reduce((a, b) => a + b, 0)) / avgRating.length).toString() + " / 10" : '10 / 10'}</div>


            <div className="otherRating"> Average Rating</div>
          </div>
        </div>
        <div className="button-container">
          <Link to={`/reviews/${foodItem._id}`}>
            <button className="reviews-button">Reviews</button>
          </Link>
          <button className="info-button" onClick={(event) => displayInfo(event,foodItem.nutritionalInfo)}>Nutritional info</button>
        </div>
        <div id="text">{avgRating = []}</div>
      </div>
    ) : null
  )}
</div>


    )
}