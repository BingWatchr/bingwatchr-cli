<<<<<<< HEAD
import { useState, useEffect } from "react";
import axios from "axios";
import { AddShow } from "../components/AddShow";
import { ShowCard } from "../components/ShowCard";
const API_URL = "http://localhost:5005";
=======
import { useState, useEffect } from 'react';
import { AddShow } from '../components/AddShow';
import { ShowCard } from '../components/ShowCard';
import axios from 'axios';
const API_URL = 'http://localhost:5005';
>>>>>>> 722d62753b70f399d7d42b24b43423e7c8952245

export const ShowListPage = () => {
	const [shows, setShow] = useState([]);

<<<<<<< HEAD
  const getAllShows = () => {
    axios
      .get(`${API_URL}/api/shows`)
      .then((response) => {
        setShow(response.data);
        console.log(shows);
      })
      .catch((error) => console.log(error));
  };
=======
	const getAllShows = () => {
		axios
			.get(`${API_URL}/api/shows`)
			.then((response) => setShow(response.data))
			.catch((error) => console.log(error));
	};
>>>>>>> 722d62753b70f399d7d42b24b43423e7c8952245

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllShows();
	}, []);
	return (
		<div className="ShowListPage">
			<h1>doing something</h1>
			<AddShow refreshProjects={getAllShows} />
			{shows.map((show) => (
				<ShowCard key={show._id} {...shows} />
			))}
		</div>
	);
};
