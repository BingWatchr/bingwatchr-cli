import { useState, useEffect } from "react";
import axios from "axios";
import { AddShow } from "../components/AddShow";
import { ShowCard } from "../components/ShowCard";
const API_URL = "http://localhost:5005";

export const ShowListPage = () => {
  const [shows, setShow] = useState([]);

  const getAllShows = () => {
    axios
      .get(`${API_URL}/api/shows`)
      .then((response) => {
        setShow(response.data);
        console.log(shows);
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
      <h1>doing something</h1>
      <AddShow refreshProjects={getAllShows} />
      {shows.map((show) => {
        console.log(show);
        return <ShowCard key={show._id} {...show} />;
      })}
    </div>
  );
};
