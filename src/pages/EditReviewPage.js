import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { StarRating } from "./../components/StarRating";
import Button from "react-bootstrap/esm/Button";
export const EditReviewPage = (props) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const { reviewId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/reviews/edit/${reviewId}`)
      .then((response) => {
        const theReview = response.data;
        setText(theReview.text);
        setRating(theReview.rating);
      })
      .catch((error) => console.log(error));
  }, [reviewId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { text, rating };
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Make a PUT request to update the task
    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/api/reviews/edit/${reviewId}`,
        requestBody,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((response) => {
        navigate(-1);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3>Edit your review</h3>

      <form
        onSubmit={handleFormSubmit}
        className="d-flex flex-column align-items-center w-25"
      >
        <label>Select Rating</label>
        <StarRating newRating={rating} setNewRating={setRating} />

        <label className="m-1">Edit Review</label>
        <textarea
          maxLength="500"
          rows="5"
          cols="60"
          className="m-1"
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="m-1" variant="dark" type="submit">
          Update Review
        </Button>
      </form>
    </div>
  );
};
