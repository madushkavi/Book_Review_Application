import React from "react";
import "./css/ReviewCard.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ReviewCard({ review }) {
  const renderstar = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? <FaStar style={{ color: "#ebeb22" }} /> : <FaRegStar />
      );
    }
    return stars;
  };
  return (
    <div className="review-card-main-container">
      <Link to={`/bookreview/${review._id}`} className="review-card-link">
      <div className="review-card-top" >
        <h2>{review.name}</h2>
        <p>
          <strong>Author:</strong> {review.author}
        </p>
        <p>
          <strong>Review:</strong> {review.review_text}
        </p>
      </div>
      <div className="review-card-bottom">
        <p className="rating-star-view">{renderstar(review.rating)}</p>
      </div>
      </Link>
    </div>
  );
}

export default ReviewCard;
