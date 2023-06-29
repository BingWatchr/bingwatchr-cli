import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export const OurNavbar = () => {
	const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
			<Container>
				<Image
					className="p-2"
					src="../img/logobad.png"
					width="100px"
					alt="logo"
				/>
				<Navbar.Brand href="/shows">Shows</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/shows">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">More deets</Nav.Link>
						{isLoggedIn && (
							<div>
								<button onClick={logOutUser}>Logout</button>
								<span>Welcome, {user && user.name}</span>
							</div>
						)}
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
