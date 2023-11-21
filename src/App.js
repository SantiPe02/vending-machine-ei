import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import PrevPage from "./startingPage/PrevPage";
import StatisticsPage from "./home/StatisticsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
          <Route path="/statistics" Component={StatisticsPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
