import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const API_URL = "http://localhost:5005";

export const ReviewCard = ({
  _id,
  author,
  text,
  rating,
  tvShow,
  createdAt,
  updatedAt,
}) => {
  const deleteReview = (id) => {
    axios
      .delete(`${API_URL}/api/reviews/${id}`)
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className="ReviewCard d-flex align-items-center">
      <div className="d-flex flex-column gap-2 w-25 align-items-center">
        <h3>Author: {author}</h3>
        <h4>Description:</h4>
        <p>{text}</p>
        <p>Rating: {rating}</p>
        <p>{createdAt}</p>

        <Button
          variant="dark"
          className="w-50"
          onClick={(e) => {
            e.preventDefault();
            deleteReview(_id);
          }}
        >
          Delete Review
        </Button>
        <Button
          variant="dark"
          className="w-50 mb-3"
          href={`/reviews/edit/${_id}`}
        >
          Edit Review
        </Button>
      </div>
    </Card>
  );
};
