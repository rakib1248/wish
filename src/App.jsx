import { Route, Routes } from "react-router-dom";
import "./App.css";
import LastDate from "./Components/LastDate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LastDate />} />
      </Routes>
    </>
  );
}

export default App;
