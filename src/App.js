import { Routes, Route } from 'react-router-dom';
import './App.css';
import { SignupPage } from './pages/signup';
import { LoginPage } from './pages/login';
import { HomePage } from './pages/homepage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
			</Routes>
		</div>
	);
}

export default App;
