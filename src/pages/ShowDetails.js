import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { AddReview } from "./../components/AddReview";
import { ReviewCard } from "./../components/ReviewCard";
import { StarDisplay } from "./../components/StarDisplay";

export const ShowDetailsPage = () => {
  const [show, setShow] = useState(null);
  const { showId } = useParams();
  const [genresString, setGenresString] = useState("");

  const getShow = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/shows/${showId}`)
      .then((response) => {
        const oneShow = response.data;
        //takes the html identation away from the text.
        response.data.summary = response.data.summary.replace(/<[^>]*>?/gm, "");
        setShow(oneShow);
        setGenresString(oneShow.genres.join(", "));
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
            <Card.Title>
              <h2>{show.name}</h2>
            </Card.Title>
            <div className="d-inline-flex gap-2">
              <StarDisplay value={show.rating} />
              <div>{show.weight}</div>
            </div>
            <div>
              <p>{genresString}</p>
            </div>
            <Card.Body className="mb-3">{show.summary}</Card.Body>
            <div>
              <p className="m-0">Premiered: {show.premiered}</p>
              <p className="m-0">Ended: {show.ended}</p>
              <p className="m-0">Status: {show.status}</p>
              <p className="m-0">Language: {show.language}</p>
              <p className="m-0">Average Length: {show.averageRuntime} mins</p>
              <p className="m-0">
                Official site:{" "}
                <Link to={show.officialSite} target="_blank">
                  Here
                </Link>
              </p>
            </div>
          </div>
        </Card>
      )}
      <AddReview refreshShows={getShow} showId={showId} show={show} />
      <h5 className="mt-5 mb-3">Users' Reviews</h5>
      {show &&
        show.reviews
          .slice()
          .reverse()
          .map((review) => (
            <ReviewCard
              show={show}
              review={review}
              key={review._id}
              {...review}
            />
          ))}
    </>
  );
};
