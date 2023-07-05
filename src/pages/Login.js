import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";
import Form from "react-bootstrap/Form";

export const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        console.log("JWT token", response.data.authToken);

        // Save the token in the localStorage.
        storeToken(response.data.authToken);

        // Verify the token by sending a request
        // to the server's JWT validation endpoint.
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="container p-5">
      <div className="p-5 border">
        <h1 className="p-5">Login</h1>

        <Form onSubmit={handleLoginSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label">Email:</Form.Label>
            <Form.Control
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </Form.Group>
          <Form.Label className="form-label">Password:</Form.Label>
          <Form.Control
            id="inputPassword5"
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <br />
          <button className="btn btn-secondary btn-lg" type="submit">
            Login
          </button>
        </Form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>Don't have an account yet?</p>
        <Link to={"/signup"}> Sign Up here</Link>
      </div>
    </div>
  );
};
