import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { ShowCard } from "../components/ShowCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Random = () => {
  const [rndShow, setRndShow] = useState([]);
  const { user } = useContext(AuthContext);
  const getRndShows = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/shows/random`)
      .then((response) => {
        setRndShow(response.data);
      })
      .catch((e) => console.log(e));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getRndShows();
  }, []);

  return (
    <div className="RndShowPage">
    <h3 className="m-3">Your Random Show!</h3>
      <Container>
        <Row>
          <Col>
            <Col>
              {rndShow.map((show) => {
                return <ShowCard key={show._id} {...show} />;
              })}
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
