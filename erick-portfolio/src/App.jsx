// src/App.jsx (CÓDIGO REVISADO DE ROTAS)

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação de todos os seus componentes
import Login from './views/Login.jsx';
import Portfolio from './views/Portfolio.jsx';
import Jornada from './views/Jornada.jsx';
import Projetos from './views/Projetos.jsx';
import ProjetosResults from './views/ProjetosResults.jsx';

function App() {
    return (
        <BrowserRouter>
            {/* Removida a tag <nav> e os <Link>s globais, 
            pois a navegação é feita via botões e cards DENTRO das views.
            */}
            
            <Routes>
                {/* 1. Rota de Login (Página Inicial) 
                A rota exata para o Portfólio é definida após o login.
                */}
                <Route path="/" element={<Login />} />
                
                {/* 2. Rota Principal do Portfólio */}
                <Route path="/portfolio" element={<Portfolio />} />
                
                {/* 3. Rota Minha Jornada */}
                <Route path="/jornada" element={<Jornada />} />
                
                {/* 4. Rota Meus Projetos */}
                <Route path="/projetos" element={<Projetos />} />
                
                {/* 5. Rota Detalhe do Projeto */}
                {/* Usamos um parâmetro ':id' para que você possa carregar o projeto 1 ou 2 */}
                <Route path="/projetos/detalhe" element={<ProjetosResults />} />
                
                {/* Você pode adicionar uma rota de 404 aqui se quiser:
                <Route path="*" element={<h1>404: Página não encontrada</h1>} />
                */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;