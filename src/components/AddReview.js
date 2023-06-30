import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const API_URL = 'http://localhost:5005';

export const AddReview = (props) => {
	const { user } = useContext(AuthContext);
	const [text, setText] = useState('');
	const [rating, setRating] = useState(8);

	const handleSubmit = (e) => {
		e.preventDefault();
		const { showId } = props;
		console.log(user);
		const author = user._id;
		const requestBody = { author, text, rating, showId };
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		axios
			.post(`${API_URL}/api/reviews`, requestBody, {
				headers: { Authorization: `Bearer ${storedToken}` },
			})
			.then((response) => {
				setText('');
				setRating(8);
				// Invoke the callback function coming through the props
				// from the ShowDetailsPage, to refresh the show details
				props.refreshShows();
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<div className="AddReview">
			<h3>Add New Review</h3>

			<form onSubmit={handleSubmit}>
				<label>Title:</label>
				<input
					type="text"
					name="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>

				<label>rating:</label>
				<textarea
					type="number"
					name="text"
					value={rating}
					onChange={(e) => setRating(e.target.value)}
				/>

				<button type="submit">Add Review</button>
			</form>
		</div>
	);
};
