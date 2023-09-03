import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Landing from './pages/landing';
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
