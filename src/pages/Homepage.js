import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const HomePage = () => {
	const { user } = useContext(AuthContext);
	return (
		<>
			<Container>
				<Row>
					<h1 className="p-5">Your favorite shows are here!</h1>
					<Image src="img/streaming.svg" width="600px" fluid />
				</Row>
			</Container>{' '}
			<Container className="col-lg-6 order-2 order-lg-1 p-5">
				<Row>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src="img/sf.svg" />
						<Card.Body>
							<Card.Title>Science Fiction</Card.Title>
							<Card.Text>
								The future might be around the corner, but a really dark corner.
							</Card.Text>
							<Button
								href="/shows/tag/genres/science-fiction"
								variant="primary"
							>
								The future is here!
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src="img/drama.svg" />
						<Card.Body>
							<Card.Title>Drama</Card.Title>
							<Card.Text>
								Sometimes it's best to focus on other people's problems.
							</Card.Text>
							<Button href="/shows/tag/genres/drama" variant="primary">
								I want to cry
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src="img/horror.svg" />
						<Card.Body>
							<Card.Title>Horror</Card.Title>
							<Card.Text>
								Are you looking for some monsters? Well, if you think you'll be
								able to sleep at night.
							</Card.Text>

							<Button href="/shows/tag/genres/horror" variant="primary">
								Spooky!
							</Button>
						</Card.Body>
					</Card>
				</Row>
			</Container>
		</>
	);
};
