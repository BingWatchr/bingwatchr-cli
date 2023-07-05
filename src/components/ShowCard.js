import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { StarDisplay } from './StarDisplay';
import { FavMovie } from './Favorite';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';

export const ShowCard = (value) => {
	const premieredYear = value.premiered.slice(0, 4);
	const { user } = useContext(AuthContext);

	return (
		<>
			<Card className="d-flex flex-row align-items-center gap-5">
				<div>
					{value.image ? (
						<Card.Img
							className=""
							variant="top"
							style={{ width: '12rem' }}
							src={value.image}
							alt="no image"
						/>
					) : (
						<Card.Img
							className=""
							variant="top"
							style={{ width: '12rem' }}
							alt="no image"
						/>
					)}
				</div>

				<div className="">
					<div className="d-flex flex-column align-items-center">
						<Link
							to={`/shows/${value._id}`}
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<Card.Title>
								<h2>{value.name}</h2>
							</Card.Title>
						</Link>
						<h4>
							<i style={{ color: '#888888' }}>{premieredYear}</i>
						</h4>
					</div>
					<Card.Body>
						<div className="d-inline-flex gap-2">
							<StarDisplay value={value.rating} />
							<div>{value.weight}</div>
						</div>
						{user && <FavMovie value={value} />}
					</Card.Body>
				</div>
			</Card>
		</>
	);
};
