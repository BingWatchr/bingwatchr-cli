import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const EditReviewPage = (props) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const { reviewId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/reviews/edit/${reviewId}`)
      .then((response) => {
        const theReview = response.data;
        setText(theReview.text);
        setRating(theReview.description);
        console.log(theReview);
        console.log("theReview is above!");
      })
      .catch((error) => console.log(error));
  }, [reviewId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { text, rating };

    // Make a PUT request to update the task
    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/api/reviews/edit/${reviewId}`, requestBody)
      .then((response) => {
        navigate(-1);
      });
  };

  return (
    <div className="EditTaskPage">
      <h3>Edit your review</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Your review:</label>
        <input
          type="text"
          name="title"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label>Rating:</label>
        <textarea
          name="rating"
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button type="submit">Update Project</button>
      </form>
    </div>
  );
};
