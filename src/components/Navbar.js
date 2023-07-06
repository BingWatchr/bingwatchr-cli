import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";

export const OurNavbar = ({ setSearchTerm }) => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const location = useLocation();
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/">
            <Image
              className="p-2"
              src="../img/logobad.png"
              width="100px"
              alt="logo"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto m-2">
            <Nav.Link href="/shows">
              <b>📺 Shows</b>
            </Nav.Link>
            <Nav.Link href="/random">🔀 Shuffle</Nav.Link>
            <Nav.Link href="/add">➕ Add</Nav.Link>
            <Form>
              <Form.Control
                disabled={location.pathname !== "/shows"}
                type="search"
                onChange={handleSearch}
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
          </Nav>

          <Nav>
            {isLoggedIn && (
              <div className="d-flex">
                <Button variant="outline-dark" onClick={logOutUser}>
                  Logout
                </Button>
                <Nav.Link href="/profile">
                  <span className="m-2">Welcome, {user && user.name}</span>
                </Nav.Link>
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
