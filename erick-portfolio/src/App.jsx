// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Removido Link e useState, pois não serão usados aqui

// Importe todos os seus componentes Views
import Login from './views/Login.jsx';
import Portfolio from './views/Portfolio.jsx';
import Jornada from './views/Jornada.jsx';
import Projetos from './views/Projetos.jsx';
import ProjetosResults from './views/ProjetosResults.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* Atenção: A Navbar global foi removida.
        As telas de Portfólio/Jornada/Projetos terão sua própria navegação interna.
      */}
      <Routes>
        {/* Rota 1: Ponto de partida - Login (caminho "/") */}
        <Route path="/" element={<Login />} />
        
        {/* Rota 2: Portfólio (Tela principal após o login) */}
        <Route path="/portfolio" element={<Portfolio />} />
        
        {/* Rota 3: Minha Jornada */}
        <Route path="/jornada" element={<Jornada />} />
        
        {/* Rota 4: Projetos (Visão Geral) */}
        <Route path="/projetos" element={<Projetos />} />
        
        {/* Rota 5: Detalhe do Projeto (Usaremos um ID dinâmico posteriormente, mas por enquanto, manteremos o caminho simples) */}
        <Route path="/projetos/detalhe" element={<ProjetosResults />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;