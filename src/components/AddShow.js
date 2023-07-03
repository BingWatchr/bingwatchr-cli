import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
const API_URL = "http://localhost:5005";
export const AddShow = (props) => {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [imageURL, setImageURL] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, summary, imageURL };
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/api/shows`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setName("");
        setSummary("");
        setImageURL("");
        props.refreshShows();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="AddShow">
      <h3>Add Show</h3>
      <Form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Summary:</label>
        <textarea
          type="text"
          name="description"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <label>Image URL:</label>
        <input
          type="text"
          name="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <Button variant="dark" type="submit">Submit</Button>
      </Form>
    </div>
  );
};
