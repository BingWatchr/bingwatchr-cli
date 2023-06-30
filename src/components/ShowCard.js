import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export const ShowCard = (value) => {
  const newSummary = value.summary.replace(/<[^>]*>?/gm, "");

  return (
    <>
      <Card className="p-5">
        {value.image ? (
          <Card.Img
            className="p-5"
            variant="top"
            style={{ width: "14rem" }}
            src={value.image.medium}
            alt="no image"
          />
        ) : (
          <Card.Img
            className="p-5"
            variant="top"
            style={{ width: "14rem" }}
            alt="no image"
          />
        )}

        <Link to={`/shows/${value._id}`}>
          <Card.Title>{value.name}</Card.Title>
        </Link>
        <Card.Body>{newSummary}</Card.Body>
      </Card>
    </>
  );
};
