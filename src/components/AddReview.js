import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

export const AddReview = (props) => {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { showId } = props;
    const requestBody = { name, summary, showId };
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/reviews`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setName("");
        setSummary("");
        // Invoke the callback function coming through the props
        // from the ShowDetailsPage, to refresh the show details
        props.refreshShow();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="AddReview">
      <h3>Add New Review</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />

        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};