import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BasicCounterApp from "./components/BasicCounterApp";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic-counter-app" element={<BasicCounterApp />} />
      </Routes>
    </Router>
  );
}

export default App;
