import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { AddReview } from "./../components/AddReview";
import { ReviewCard } from "./../components/ReviewCard";
import { StarRating } from "./../components/StarRating";
const API_URL = "http://localhost:5005";

export const ShowDetailsPage = () => {
  const [show, setShow] = useState(null);
  const { showId } = useParams();

  const getShow = () => {
    axios
      .get(`${API_URL}/api/shows/${showId}`)
      .then((response) => {
        const oneShow = response.data;
        //takes the html identation away from the text.
        response.data.summary = response.data.summary.replace(/<[^>]*>?/gm, "");
        setShow(oneShow);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getShow();
  }, []);

  return (
    <>
      {show && (
        <Card className="d-flex flex-row align-items-center">
          <Card.Img
            className=""
            variant="top"
            style={{ width: "14rem" }}
            src={show.image}
          />
          <div className="d-flex flex-column align-items-center">
            <Card.Title>{show.name}</Card.Title>
            <StarRating />
            <Card.Body>{show.summary} </Card.Body>
          </div>
        </Card>
      )}
      <AddReview refreshShows={getShow} showId={showId} />

      {show &&
        show.reviews.map((review) => (
          <ReviewCard key={review._id} {...review} />
        ))}
    </>
  );
};
