import axios from "axios";
import { useState,useEffect } from "react";


export const ReviewCard = (props) => {

    const [userName, setUserName] = useState("");

    useEffect(() => {
      const fetchUserName = async () => {
        try {
          const response = await axios.get(
            `http://localhost:${5000}/auth/getUserByID/${props.userId}`
          );

          setUserName(response.data.username);

        } catch (err) {
          console.log(err);
        }
      };
      fetchUserName();
    }, [props.id]);

    return (
        <div className="card">
            <div className="name">{userName}</div>
            <div className="rating">{props.rating} / 10</div>
            <div className="rating"></div>
            <div className="review-description">{props.review}</div>
        </div>
    )
}