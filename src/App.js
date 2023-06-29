import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SignupPage } from "./pages/signup";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/homepage";
import { ShowListPage } from "./pages/ShowListPage";
import { OurNavbar } from "./components/Navbar";
import { ShowDetailsPage } from "./pages/ShowDetailsPage";
function App() {
  return (
    <div className="App">
      <OurNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/shows" element={<ShowListPage />} />
        <Route path="/shows/:showId" element={<ShowDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
