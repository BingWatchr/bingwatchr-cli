import { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import authService from '../services/auth.service';
const API_URL = 'http://localhost:5005';

export const LoginPage = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined);

	const navigate = useNavigate();
	const { storeToken, authenticateUser } = useContext(AuthContext);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		const requestBody = { email, password };

		authService
			.login(requestBody)
			.then((response) => {
				console.log('JWT token', response.data.authToken);

				// Save the token in the localStorage.
				storeToken(response.data.authToken);

				// Verify the token by sending a request
				// to the server's JWT validation endpoint.
				authenticateUser();
				navigate('/');
			})
			.catch((error) => {
				const errorDescription = error.response.data.message;
				setErrorMessage(errorDescription);
			});
	};

	return (
		<div className="container">
			<div className="mb-3">
				<h1>Login</h1>

				<form onSubmit={handleLoginSubmit}>
					<label className="form-label">Email:</label>
					<input
						className="form-control"
						type="email"
						name="email"
						value={email}
						onChange={handleEmail}
					/>

					<label className="form-label">Password:</label>
					<input
						id="inputPassword5"
						className="form-control"
						type="password"
						name="password"
						value={password}
						onChange={handlePassword}
					/>

					<button className="btn btn-secondary btn-lg" type="submit">
						Login
					</button>
				</form>
				{errorMessage && <p className="error-message">{errorMessage}</p>}

				<p>Don't have an account yet?</p>
				<Link to={'/signup'}> Sign Up</Link>
			</div>
		</div>
	);
};