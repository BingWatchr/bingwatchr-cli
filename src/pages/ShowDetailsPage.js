import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AddReview } from "../components/AddReview";
import { ReviewCard } from "../components/ReviewCard";
const API_URL = "http://localhost:5005";

export const ShowDetailsPage = (props) => {
  const [show, setShow] = useState(null);
  const { showId } = useParams();

  const getShow = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/shows/${showId}`)
      .then((response) => {
        const oneShow = response.data;
        setShow(oneShow);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getShow();
  }, []);

  return (
    <div className="ProjectDetails">
      {show && (
        <div>
          <h1>{show.name}</h1>
          <p>{show.summary}</p>
        </div>
      )}

      <AddReview refreshProject={getShow} projectId={showId} />

      {show &&
        show.reviews.map((review) => (
          <ReviewCard key={review._id} {...review} />
        ))}

      <Link to="/shows">
        <button>Back to shows</button>
      </Link>
      <Link to={`/shows/edit/${showId}`}>
        <button>Edit Project</button>
      </Link>
    </div>
  );
};
