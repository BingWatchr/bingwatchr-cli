import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
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
      .post(`${process.env.REACT_APP_SERVER_URL}/api/shows`, requestBody, {
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
      <Form
        className="d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleSubmit}
      >
        <label>Title:</label>
        <input
          maxLength="30"
          type="text"
          name="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Summary:</label>
        <textarea
          maxLength="800"
          rows="5"
          cols="60"
          className="m-1"
          type="text"
          name="description"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <label>Image URL:</label>
        <input
        className="m-1"
          type="text"
          name="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <Button className="m-1" variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
