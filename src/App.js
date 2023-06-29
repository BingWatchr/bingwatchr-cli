import "./App.css";
import { Routes, Route } from "react-router-dom";

import { ShowListPage } from "./pages/ShowListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/shows" element={<ShowListPage />} />
      </Routes>
    </div>
  );
}

export default App;
