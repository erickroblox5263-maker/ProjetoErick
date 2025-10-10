import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import Portfolio from './views/Portfolio.jsx'
import Jornada from './views/Jornada.jsx'
import Projetos from './views/Projetos.jsx'
import ProjetosResults from './views/ProjetosResults.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Portfolio</Link> |{" "}
        <Link to="/about">Jornada</Link> |{" "}
        <Link to="/contact">Projetos</Link> |{" "}
        <Link to="/Link">ProjetosResults</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<Jornada />} />
        <Route path="/contact" element={<Projetos />} />
        <Route path="/Link" element={<ProjetosResults />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
