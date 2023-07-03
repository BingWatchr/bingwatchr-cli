import { useState, useEffect } from "react";
import axios from "axios";
import { AddShow } from "../components/AddShow";
import { ShowCard } from "../components/ShowCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API_URL = "http://localhost:5005";

export const ShowListPage = ({ searchTerm }) => {
  const [shows, setShow] = useState([]);
  // Filter the items based on the searchQuery
  const filteredItems = shows.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const getAllShows = () => {
    axios
      .get(`${API_URL}/api/shows`)
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
      <AddShow refreshShows={getAllShows} />
      <br />
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
