import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { StarDisplay } from "./../components/StarDisplay";
export const ReviewCard = ({
  _id,
  author,
  text,
  rating,
  tvShow,
  updatedAt,
  show,
  review,
}) => {
  
  const storedToken = localStorage.getItem("authToken");
  const dateTime = new Date(updatedAt);
  const year = dateTime.getFullYear();
  const month = dateTime.toLocaleString("en-US", { month: "long" });
  const day = dateTime.getDate();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const formattedDateTime = `on ${month} ${day}, ${year} at ${hours}:${minutes}`;

  const deleteReview = (reviewId) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/api/reviews/${reviewId}`)
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  const updateRating = (showId) => {
    const showRating = show.rating;
    const showWeight = show.weight;
    const newRating =
      (showRating * showWeight - review.rating) / (showWeight - 1);
    const newWeight = show.weight - 1;
    const requestShowBody = { rating: newRating, weight: newWeight };
    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/api/shows/${showId}`,
        requestShowBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Card className="ReviewCard d-flex align-items-center">
      <div className="d-flex flex-column gap-2 w-25 align-items-center">
        <h4 className="m-0">Author: {author[0].name}</h4>
        <i>{formattedDateTime}</i>
        <StarDisplay value={rating} />
        <p>{text}</p>
        <Button
          variant="dark"
          className="w-50"
          onClick={(e) => {
            e.preventDefault();
            deleteReview(_id);
            updateRating(tvShow[0], _id);
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
