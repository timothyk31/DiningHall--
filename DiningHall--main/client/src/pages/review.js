import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams here
import { ReviewCard } from "../components/reviewCard";
import { useGetUserID } from "../hooks/useGetUserId";

export const ReviewPage = () => {
  const { id } = useParams();

  const [foodReviews, setFoodReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:${5000}/food/reviews/${id}`
        );
        setFoodReviews(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReviews();
  }, [id]); // Include 'id' as a dependency

  const [reviewText, setReviewText] = useState("");

  const userID = useGetUserID();
  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
        await axios.post(`http://localhost:${5000}/food/reviews/${id}/postReview`, {
            foodId: id, // Make sure 'foodId' is correctly passed
            review: reviewText, // Your reviewText variable
            rating: userRating,
            userId: userID, // Your userID variable
        });
    } catch (err) {
        console.log(err);
    }
};

const [userRating, setUserRating] = useState(0)


  return (
    <div className="page">
      <div className="card" id="review-form">
        <span className="name">Leave a Review</span>
        <form className="form" onSubmit={handleSubmit}>
          <div className="group">
            <textarea
              placeholder=""
              id="comment"
              name="comment"
              rows="5"
              required=""
              value={reviewText}
              onChange={(event) => setReviewText(event.target.value)}
  
            ></textarea>
          <input type="number" id="numberInput" name="numberInput" min="0" max="10" required onChange={(event => setUserRating(event.target.value))}></input>            
          </div>
          <button type="submit" className="info-button">
            Submit
          </button>
        </form>
      </div>

      <>
        {foodReviews.map((text) => (
          <ReviewCard key={text.id} {...text} />
        ))}
      </>


    </div>
  );
};
