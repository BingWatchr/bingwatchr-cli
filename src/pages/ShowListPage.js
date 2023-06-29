import { useState, useEffect } from "react";
import { AddShow } from "../components/AddShow";
import { ShowCard } from "../components/ShowCard";
import axios from "axios";
const API_URL = "http://localhost:5005";

export const ShowListPage = () => {
  const [shows, setShow] = useState([]);

  const getAllShows = () => {
    axios
      .get(`${API_URL}/api/shows`)
      .then((response) => setShow(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllShows();
  }, []);
  return (
    <div className="ShowListPage">
      <AddShow refreshProjects={getAllShows} />
      {shows.map((show) => (
        <ShowCard key={show._id} {...shows} />
      ))}
    </div>
  );
};
