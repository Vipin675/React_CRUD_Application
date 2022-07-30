import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Edit from "./components/edit/Edit";
import Detail from "./components/detail/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/edit/:id" element={<Edit />} />
            <Route exact path="/view/:id" element={<Detail />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
