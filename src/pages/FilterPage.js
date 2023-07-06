import { useState, useEffect } from 'react';
import axios from 'axios';
import { ShowCard } from '../components/ShowCard';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const API_URL = 'http://localhost:5005';

export const FilterPage = () => {
	const [shows, setShow] = useState([]);
	// Filter the items based on the searchQuery
	const { filtername, type } = useParams();

	const getAllShows = () => {
		axios
			.get(`${API_URL}/api/shows/tag/${type}/${filtername}`)
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
			<br />
			<Container>
				<Row>
					<Col>
						{shows.map((show) => {
							return <ShowCard key={show._id} {...show} />;
						})}
					</Col>
				</Row>
			</Container>
		</div>
	);
};
