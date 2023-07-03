import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';
const API_URL = 'http://localhost:5005';

export const FavMovie = (props) => {
	const showId = props.value._id;
	const { user } = useContext(AuthContext);
	const storedToken = localStorage.getItem('authToken');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		const author = user._id;
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		axios
			.post(`${API_URL}/api/shows`, requestBody, {
				headers: { Authorization: `Bearer ${storedToken}` },
			})
			.then((response) => {
				setFavorite('');

				// Invoke the callback function coming through the props
				// from the ShowDetailsPage, to refresh the show details
				props.refreshShows();
			})
			.catch((e) => {
				console.log(e);
			});
	};
	return (
		<>
			{props.value && (
				<button onClick={() => getLikes()}>{favorite} Likes</button>
			)}
		</>
	);
};
