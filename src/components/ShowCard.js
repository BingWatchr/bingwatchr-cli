import { Link } from "react-router-dom";

export const ShowCard = ({ name, summary, _id }) => {
  return (
    <div className="ShowCard card">
      <Link to={`/shows/${_id}`}>
        <h3>{name}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{summary} </p>
    </div>
  );
};
