import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
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
            {isLoggedIn && (
              <div>
                <Button variant="outline-dark" onClick={logOutUser}>
                  Logout
                </Button>
                <span className="m-2">Welcome, {user && user.name}</span>
              </div>
            )}
            {!isLoggedIn && (
              <div className="d-flex">
                <Nav.Link href="/signup">
                  <Button variant="outline-dark">Sign Up</Button>
                </Nav.Link>
                <Nav.Link href="/login">
                  <Button variant="outline-dark">Log In</Button>
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
