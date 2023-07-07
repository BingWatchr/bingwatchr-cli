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
import { IsAnon } from './components/isAnon';
import { IsPrivate } from './components/isPrivate';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<div className="App">
			<OurNavbar setSearchTerm={setSearchTerm} />
			<Routes>
				<Route
					path="/"
					element={
						<IsAnon>
							<HomePage />
						</IsAnon>
					}
				/>{' '}
				<Route
					path="/login"
					element={
						<IsAnon>
							<LoginPage />
						</IsAnon>
					}
				/>{' '}
				<Route
					path="/signup"
					element={
						<IsAnon>
							<SignupPage />
						</IsAnon>
					}
				/>{' '}
				<Route
					path="/shows"
					element={<ShowListPage searchTerm={searchTerm} />}
				/>
				<Route path="/shows/:showId" element={<ShowDetailsPage />} />
				<Route
					path="/reviews/edit/:reviewId"
					element={
						<IsPrivate>
							<EditReviewPage />
						</IsPrivate>
					}
				/>
				<Route path="/shows/tag/:type/:filtername" element={<FilterPage />} />
				<Route
					path="/profile"
					element={
						<IsPrivate>
							<Profile />
						</IsPrivate>
					}
				/>
				<Route path="/random" element={<Random />} />
				<Route
					path="/add"
					element={
						<IsPrivate>
							<Add />
						</IsPrivate>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
