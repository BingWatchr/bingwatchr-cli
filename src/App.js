import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SignupPage } from "./pages/signup";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/homepage";
import { ShowListPage } from "./pages/ShowListPage";
import { OurNavbar } from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <OurNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/shows" element={<ShowListPage />} />
      </Routes>
    </div>
  );
}

export default App;
