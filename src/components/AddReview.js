import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { StarRating } from "./StarRating";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AddReview = (props) => {
  const { user } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [newRating, setNewRating] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { showId } = props;
    console.log(user);
    const author = user._id;
    const requestBody = { author, text, newRating, showId };
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/reviews`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setText("");
        // Invoke the callback function coming through the props
        // from the ShowDetailsPage, to refresh the show details
        props.refreshShows();
      })
      .catch((e) => {
        console.log(e, requestBody);
      });
  };

  return (
    <div className="AddReview mt-5">
      <h5 className="mb-3">Want to review this Show?</h5>
      <Form
        className="d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleSubmit}
      >
        <label>Select Rating</label>
        <StarRating newRating={newRating} setNewRating={setNewRating} />

        <div className="d-flex flex-column align-items-center w-25">
          <label className="m-1">Write a Review</label>
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
          <Button className="m-1 w-50" variant="dark" type="submit">
            Review
          </Button>
        </div>
      </Form>
    </div>
  );
};
