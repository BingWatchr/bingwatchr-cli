import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { ShowCard } from "../components/ShowCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Profile = () => {
  const [shows, setShow] = useState([]);
  const { user } = useContext(AuthContext);
  const getAllShows = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/shows`)
      .then((response) => {
        const allData = response.data;
        setShow(allData.filter((item) => item.favorites.includes(user?._id)));
      })
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllShows();
  }, [user]);

  return (
    <div className="ShowListPage">
      {user && (
        <div className="profile">
          <h1>Your profile page</h1>
          <h3 className="m-3">Your favorite shows</h3>
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
      )}
    </div>
  );
};
