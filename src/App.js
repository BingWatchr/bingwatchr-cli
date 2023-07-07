import { Routes, Route } from 'react-router-dom';
import './App.css';
import { SignupPage } from './pages/Signup';
import { HomePage } from './pages/Homepage';
import { ShowDetailsPage } from './pages/ShowDetails';
import { ShowListPage } from './pages/ShowListPage';
import { OurNavbar } from './components/Navbar';
import { LoginPage } from './pages/Login';
import { Profile } from './pages/Profile';
import { EditReviewPage } from './pages/EditReviewPage';
import { useState } from 'react';
import { Random } from './pages/Random';
import { Add } from './pages/Add';
import { FilterPage } from './pages/FilterPage';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<div className="App">
			<OurNavbar setSearchTerm={setSearchTerm} />
			<Routes>
				<isAnon>
					<Route path="/" element={<HomePage />} />{' '}
				</isAnon>
				<isAnon>
					<Route path="/login" element={<LoginPage />} />{' '}
				</isAnon>
				1
				<isAnon>
					<Route path="/signup" element={<SignupPage />} />{' '}
				</isAnon>
				<Route
					path="/shows"
					element={<ShowListPage searchTerm={searchTerm} />}
				/>
				<Route path="/shows/:showId" element={<ShowDetailsPage />} />
				<isPrivate>
					<Route path="/reviews/edit/:reviewId" element={<EditReviewPage />} />
				</isPrivate>
				<Route path="/shows/tag/:type/:filtername" element={<FilterPage />} />
				<isPrivate>
					<Route path="/profile" element={<Profile />} />
				</isPrivate>
				<Route path="/random" element={<Random />} />
				<isPrivate>
					<Route path="/add" element={<Add />} />
				</isPrivate>
			</Routes>
		</div>
	);
}

export default App;
