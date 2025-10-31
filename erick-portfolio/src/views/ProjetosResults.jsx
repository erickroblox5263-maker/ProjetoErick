// src/views/ProjetosResults.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ProjetosResults = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-success">Detalhes do Projeto</h1>
            
            <div className="card shadow p-4 mb-4">
                <h2 className="card-title mb-3">Nome do Projeto: [Projeto 1 ou 2]</h2>
                
                <p>
                    [Aqui você colocará a descrição detalhada do projeto, as tecnologias usadas, 
                    desafios enfrentados e as funcionalidades principais. Use parágrafos longos 
                    para preencher o espaço conforme o rascunho.]
                </p>
                <hr />
                
                {/* Destaque do Link Roblox */}
                <div className="alert alert-danger text-center" role="alert">
                    <h4 className="alert-heading">Link do jogo no Roblox:</h4>
                    <a 
                        href="https://www.youtube.com/watch?v=nwck5tiO5kw" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-lg btn-danger mt-2"
                    >
                        Jogue Agora!
                    </a>
                </div>
            </div>

            {/* Botão de volta */}
            <div className="text-center">
                <Link to="/projetos" className="btn btn-outline-success">
                    ← Voltar para a Lista de Projetos
                </Link>
            </div>
        </div>
    );
};

export default ProjetosResults;