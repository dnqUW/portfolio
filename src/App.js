import Home from "./pages/home.js";
import About from "./pages/about.js";
import Projects from "./pages/projects.js";
import Resume from "./pages/resume.js";
import {Routes, Route} from "react-router-dom";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/resume" element={<Resume />}/>
    </Routes>
  );
}

