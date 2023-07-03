<<<<<<< HEAD
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { AddReview } from "./../components/AddReview";
import { ReviewCard } from "./../components/ReviewCard";
import { StarDisplay } from "./../components/StarDisplay";
const API_URL = "http://localhost:5005";

export const ShowDetailsPage = () => {
  const [show, setShow] = useState(null);
  const { showId } = useParams();
  const [genresString, setGenresString] = useState("");

  const getShow = () => {
    axios
      .get(`${API_URL}/api/shows/${showId}`)
      .then((response) => {
        const oneShow = response.data;
        //takes the html identation away from the text.
        response.data.summary = response.data.summary.replace(/<[^>]*>?/gm, "");
        setShow(oneShow);
        setGenresString(oneShow.genres.join(", "));
      })
      .catch((error) => console.log(error));
  };
=======
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { AddReview } from './../components/AddReview';
import { ReviewCard } from './../components/ReviewCard';
import { StarDisplay } from './../components/StarDisplay';
const API_URL = 'http://localhost:5005';

export const ShowDetailsPage = () => {
	const [show, setShow] = useState(null);
	const { showId } = useParams();

	const getShow = () => {
		axios
			.get(`${API_URL}/api/shows/${showId}`)
			.then((response) => {
				const oneShow = response.data;
				//takes the html identation away from the text.
				response.data.summary = response.data.summary.replace(/<[^>]*>?/gm, '');
				setShow(oneShow);
			})
			.catch((error) => console.log(error));
	};
>>>>>>> 5e8a8348de1ca1a324a5a7a506e3e7e2b12dda78

	useEffect(() => {
		getShow();
	}, []);

<<<<<<< HEAD
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
              <div>{show.reviews.length}</div>
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
      <AddReview refreshShows={getShow} showId={showId} />
      <h5 className="mt-5 mb-3">Users' Reviews</h5>
      {show &&
        show.reviews.map((review) => (
          <ReviewCard key={review._id} {...review} />
        ))}
    </>
  );
=======
	return (
		<>
			{show && (
				<Card className="d-flex flex-row align-items-center">
					<Card.Img
						className=""
						variant="top"
						style={{ width: '14rem' }}
						src={show.image}
					/>
					<div className="d-flex flex-column align-items-center">
						<Card.Title>{show.name}</Card.Title>
						<StarDisplay value={show.rating} />
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
>>>>>>> 5e8a8348de1ca1a324a5a7a506e3e7e2b12dda78
};
