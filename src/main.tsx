import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";

function About() {
    return null;
}

function Projects() {
    return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
          </Routes>
      </BrowserRouter>


  </StrictMode>,
)
