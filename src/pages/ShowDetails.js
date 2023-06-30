import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const API_URL = 'http://localhost:5005';

export const ShowDetailsPage = () => {
	const [foundShow, setShow] = useState(null);
	const { showId } = useParams();

	const getShow = () => {
		axios
			.get(`${API_URL}/api/shows/${showId}`)
			.then((response) => {
				const oneShow = response.data;
				//takes the html identation away from the text.
				response.data.summary = response.data.summary.replace(/<[^>]*>?/gm, '');
				console.log(response.data.summary);
				setShow(oneShow);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getShow();
	}, []);

	return (
		<>
			{foundShow && (
				<Card className="p-5">
					<Card.Img
						className="p-5"
						variant="top"
						style={{ width: '14rem' }}
						src={foundShow.image.medium}
					/>
					<Card.Title>{foundShow.name}</Card.Title>
					<Card.Body>{foundShow.summary} </Card.Body>
				</Card>
			)}
		</>
	);
};
