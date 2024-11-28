import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./css/ReviewForm.css";

function UpdateReviewForm() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [review, setReview] = useState({
    name: "",
    author: "",
    rating: "",
    review_text: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/reviews/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch review details");
        }
        return res.json();
      })
      .then((data) => {
        setReview(data);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to load review data.");
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/api/reviews/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update review");
        }
        return res.json();
      })
      .then(() => {
        console.log("Review updated successfully!");
        navigate("/"); 
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to update the review.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  return (
    <div className="review-form-main">
      <h2>Update Review</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Book Name: </label>
            <input
              name="name"
              type="text"
              value={review.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input">
            <label>Book Author: </label>
            <input
              name="author"
              type="text"
              value={review.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input">
            <label>Book Review: </label>
            <textarea
              name="review_text"
              value={review.review_text}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-input">
            <label>Rating: </label>
            <input
              name="rating"
              type="number"
              min="1"
              max="5"
              value={review.rating}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-submit-button">
            <button type="submit">Update Review</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateReviewForm;
