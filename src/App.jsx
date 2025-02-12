import { Route, Routes } from "react-router-dom";
import "./App.css";
import BirthdayCard from "./Components/hamida";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BirthdayCard/>} />
      </Routes>
    </>
  );
}

export default App;
