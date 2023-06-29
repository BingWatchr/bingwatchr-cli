import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import authService from '../services/auth.service';
import Form from 'react-bootstrap/Form';

const API_URL = 'http://localhost:5005';

export const SignupPage = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined);

	const navigate = useNavigate();

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);
	const handleName = (e) => setName(e.target.value);

	const handleSignupSubmit = (e) => {
		e.preventDefault();
		// Create an object representing the request body
		const requestBody = { email, password, name };

		// Make an axios request to the API
		// If the POST request is a successful redirect to the login page
		// If the request resolves with an error, set the error message in the state
		authService
			.signup(requestBody)
			.then((response) => {
				navigate('/login');
			})
			.catch((error) => {
				const errorDescription = error.response.data.message;
				setErrorMessage(errorDescription);
			});
	};

	return (
		<div className="container p-5">
			<div className="p-5 border">
				<h1 className="p-5">Sign Up</h1>

				<Form onSubmit={handleSignupSubmit}>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label className="form-label">Email:</Form.Label>
						<Form.Control
							type="email"
							name="email"
							value={email}
							onChange={handleEmail}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label className="form-label">Password:</Form.Label>
						<Form.Control
							type="password"
							name="password"
							value={password}
							onChange={handlePassword}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label className="form-label">Name:</Form.Label>
						<Form.Control
							type="text"
							name="name"
							value={name}
							onChange={handleName}
						/>
						<br />
						<button className="btn btn-secondary btn-lg" type="submit">
							Sign Up
						</button>
					</Form.Group>
				</Form>

				{errorMessage && <p className="error-message">{errorMessage}</p>}

				<p>Already have account?</p>
				<Link to={'/login'}> Login</Link>
			</div>
		</div>
	);
};
