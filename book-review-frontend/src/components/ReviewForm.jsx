import React from "react";
import "./css/ReviewForm.css";
import { useNavigate } from "react-router-dom";

function ReviewForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const review = {
      name: formData.get("title"),
      author: formData.get("author"),
      rating: formData.get("rating"),
      review_text: formData.get("reviewText"),
      
    };
console.log(review);

    fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
    .then((res) => res.json())
    .then(() => {
      console.log("Review created successfully!");
      navigate("/");
    });
  };

  return (
    <div className="review-form-main">
      <h2> Add Review</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Book Name : </label>
          <input name="title" type="text" placeholder="Enter book title" required />
        </div>
        <div className="form-input">
          <label>Book Author : </label>
          <input name="author" type="text" placeholder="Enter author name" required />
        </div>
        <div className="form-input">
          <label>Book Review : </label>
          <textarea name="reviewText" placeholder="Write your review" required></textarea>
        </div>
        <div className="form-input">
          <label>Rating : </label>
          <input
            name="rating"
            type="number"
            min="1"
            max="5"
            placeholder="Rate from 1 to 5"
            required
          />
        </div>
          <div className="form-submit-button">
          <button type="submit">Submit Review</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
