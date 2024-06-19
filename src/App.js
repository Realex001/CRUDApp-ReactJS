import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <h1>УЧЕТ ПОСЕТИТЕЛЕЙ</h1>
        <div>
          <Routes>
            <Route path="/" element={<Read />} />
            <Route path="/update" element={<Update />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
