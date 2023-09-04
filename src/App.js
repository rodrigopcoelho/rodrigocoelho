import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Projects from "./pages/projects";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
