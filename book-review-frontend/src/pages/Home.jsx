import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import axios from "axios";
import './css/Home.css';

function Home() {
  const [reviews, setReviews] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (loading) {
    return <div className="home-main-container">
<p>Loading...</p>;
    </div>
    
  }

  return (
    <div className="home-main-container">
    
      {reviews.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        reviews.map((review) => <ReviewCard review={review} />)
      )}
    </div>
  );
}

export default Home;
