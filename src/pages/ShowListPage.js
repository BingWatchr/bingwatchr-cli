import { useState, useEffect } from 'react';
import axios from 'axios';
import { AddShow } from '../components/AddShow';
import { ShowCard } from '../components/ShowCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const API_URL = 'http://localhost:5005';

export const ShowListPage = () => {
	const [shows, setShow] = useState([]);

	const getAllShows = () => {
		axios
			.get(`${API_URL}/api/shows`)
			.then((response) => {
				setShow(response.data);			
			})
			.catch((error) => console.log(error));
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllShows();
	}, []);
	return (
		<div className="ShowListPage">
			<AddShow refreshShows={getAllShows} />
			<br />
			<Container fluid>
				<Row xs={1} md={4} className="g-4">
					{shows.map((show) => {
						return <ShowCard key={show._id} {...show} />;
					})}
				</Row>
			</Container>
		</div>
	);
};
