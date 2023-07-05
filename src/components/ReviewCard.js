import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { StarDisplay } from './../components/StarDisplay';
export const ReviewCard = ({
	_id,
	author,
	text,
	rating,
	tvShow,
	createdAt,
	show,
	review,
}) => {
	const storedToken = localStorage.getItem('authToken');
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
				<h3>Author: {author[0].name}</h3>
				<label>Rating:</label>
				<StarDisplay value={rating} />
				<h4>Description:</h4>
				<p>{text}</p>
				<p>{createdAt}</p>

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
