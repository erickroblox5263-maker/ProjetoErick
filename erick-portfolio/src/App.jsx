// src/App.jsx (ROTAS LIMPAS)

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação de todos os seus componentes
import Login from './views/Login.jsx';
import Portfolio from './views/Portfolio.jsx';
import Jornada from './views/Jornada.jsx';
// REMOVIDO: import Projetos from './views/Projetos.jsx'; // Não é mais usado

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 1. Rota de Login (Página Inicial) */}
                <Route path="/" element={<Login />} />
                
                {/* 2. Rota Principal do Portfólio */}
                <Route path="/portfolio" element={<Portfolio />} />
                
                {/* 3. Rota Minha Jornada */}
                <Route path="/jornada" element={<Jornada />} />
                
                {/* REMOVIDO: Rota /meu-projeto-unico */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;