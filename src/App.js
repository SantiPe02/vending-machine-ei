import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import PrevPage from "./startingPage/PrevPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={PrevPage} />
        <Route path="/vendingMachine/:machineId" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
