// src/views/ProjetosResults.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ProjetosResults = () => {
    // Você pode usar o hook useParams do react-router-dom aqui 
    // para pegar o ID do projeto e carregar dados específicos.
    // Exemplo: const { id } = useParams();

    return (
        // Container principal: Fundo preto e altura mínima da tela
        <div className="container-fluid min-vh-100 bg-dark text-light pt-5 pb-5">
            <div className="container">
                
                {/* Título do Projeto (Exemplo: Projeto 1 ou Projeto 2) */}
                <header className="text-center mb-5 border-bottom border-warning pb-3">
                    <h1 className="display-3 text-warning">Nome Completo do Projeto Aqui</h1>
                    <p className="lead text-light">Detalhes e Especificações Técnicas</p>
                </header>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        
                        {/* Seção de Conteúdo e Descrição */}
                        <div className="card shadow-lg p-5 mb-5 border-secondary bg-secondary text-light">
                            <h3 className="text-light mb-4 border-bottom pb-2">Descrição Técnica</h3>
                            
                            {/* Bloco de Texto 1 (Alinhado com o rascunho) */}
                            <p>
                                [**Contexto e Objetivo:**] Descreva o problema que o jogo/aplicativo resolve e qual era o objetivo principal ao desenvolvê-lo. Fale sobre a fase de planejamento.
                            </p>
                            
                            {/* Bloco de Texto 2 (Alinhado com o rascunho) */}
                            <p>
                                [**Tecnologias e Funcionalidades:**] Detalhe as linguagens (ex: Lua, JavaScript, etc.), ferramentas (ex: Roblox Studio) e as funcionalidades chave implementadas (ex: sistemas de inventário, multiplayer, física customizada).
                            </p>
                            
                            {/* Bloco de Texto 3 (Alinhado com o rascunho) */}
                            <p>
                                [**Desafios:**] Quais foram os principais desafios técnicos que você enfrentou e como você os superou durante o desenvolvimento deste projeto.
                            </p>
                            
                            <hr className="bg-warning my-4" />
                            
                            {/* Link do Jogo no Roblox (Parte inferior do rascunho) */}
                            <h4 className="text-warning mb-3">Link do jogo no Roblox:</h4>
                            <div className="text-center">
                                <a 
                                    href="[INSIRA O LINK DO ROBLOX AQUI]" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-warning btn-lg shadow-sm"
                                >
                                    <i className="bi bi-controller me-2"></i> Acessar Jogo no Roblox
                                </a>
                            </div>
                        </div>

                        {/* Botão de volta para a lista de Projetos */}
                        <div className="text-center mt-4">
                            <Link to="/projetos" className="btn btn-outline-warning btn-lg">
                                ← Voltar para Projetos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjetosResults;