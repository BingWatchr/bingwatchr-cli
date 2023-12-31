import { useState, useEffect } from "react";
import axios from "axios";
import { ShowCard } from "../components/ShowCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ShowListPage = ({ searchTerm }) => {
  const [shows, setShow] = useState([]);
  // Filter the items based on the searchQuery
  const filteredItems = shows.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const getAllShows = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/shows`)
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
      <h3 className="m-3">Browse through the Shows!</h3>
      <Container>
        <Row>
          <Col>
            {filteredItems.map((show) => {
              return <ShowCard key={show._id} {...show} />;
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
