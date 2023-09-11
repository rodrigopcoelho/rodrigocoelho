import { Route, Routes } from "react-router-dom";
import './App.css';

import Home from './pages/home';
import Projects from "./pages/projects";
import About from "./pages/about";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <AnimatePresence mode="wait">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>

      </AnimatePresence>
    </div>
  );
}

export default App;
