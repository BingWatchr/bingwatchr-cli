import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { StarDisplay } from "./StarDisplay";
export const ShowCard = (value) => {
  const newSummary = value.summary.replace(/<[^>]*>?/gm, "");

  return (
    <>
      <Card className="d-flex flex-row align-items-center">
        <div>
          {value.image ? (
            <Card.Img
              className=""
              variant="top"
              style={{ width: "14rem" }}
              src={value.image}
              alt="no image"
            />
          ) : (
            <Card.Img
              className=""
              variant="top"
              style={{ width: "14rem" }}
              alt="no image"
            />
          )}
        </div>

        <div className="d-flex flex-column align-items-center">
          <Link
            to={`/shows/${value._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Title>{value.name}</Card.Title>
          </Link>
          <StarDisplay value={value.rating.average} />
          <Card.Body>{newSummary}</Card.Body>
        </div>
      </Card>
    </>
  );
};
