import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5005";

export const ReviewCard = ({ author, text, _id }) => {
  const deleteReview = (id) => {
    axios
      .delete(`${API_URL}/api/reviews/${id}`)
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="TaskCard card">
      <h3>{author}</h3>
      <h4>Description:</h4>
      <p>{text}</p>

      <button
        onClick={(e) => {
          e.preventDefault();
          deleteReview(_id);
        }}
      >
        Delete Review
      </button>
      <Link to={`/reviews/edit/${_id}`}>
        <button>Edit Review</button>
      </Link>
    </div>
  );
};
