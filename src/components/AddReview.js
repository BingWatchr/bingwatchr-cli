import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { StarRating } from "./StarRating";

const API_URL = "http://localhost:5005";

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
      .post(`${API_URL}/api/reviews`, requestBody, {
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

  /*   useEffect(() => {
    console.log(newRating);
  }, [newRating]); */

  return (
    <div className="AddReview">
      <h3>Add New Review</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label>rating:</label>
        <StarRating newRating={newRating} setNewRating={setNewRating} />

        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};
