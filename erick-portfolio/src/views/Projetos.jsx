// src/views/Projetos.jsx (CÓDIGO FINAL: Efeito APENAS no Botão)

import React from 'react';
import { Link } from 'react-router-dom';
import '../Portfolio.css'; 

const Projetos = () => {
    return (
        <div className="container-fluid min-vh-100 bg-dark text-light pt-5 pb-5">
            <div className="container">
                
                <header className="text-center mb-5 border-bottom border-secondary pb-3">
                    <h1 className="display-4 text-light">Meus Projetos</h1>
                    <h2 className="text-warning">Criações e Desenvolvimento</h2>
                </header>
                
                <p className="lead text-center mb-5 text-white-50">
                    Abaixo estão os projetos centrais do meu TCC e outros trabalhos importantes. Clique para ver os detalhes!
                </p>

                <div className="row justify-content-center">
                    
                    {/* CARTÃO DO PROJETO 1 */}
                    <div className="col-lg-5 col-md-6 mb-4">
                        
                        {/* 1. CLASSE 'nav-card' REMOVIDA DO CARTÃO. Ele agora é estático. */}
                        <div 
                            className="card shadow-lg h-100 border-warning bg-secondary text-light"
                            style={{ cursor: 'default' }} 
                        >
                            
                            <div className="card-header bg-dark text-warning border-bottom border-warning text-center">
                                <h3 className="mb-0">Projeto 1</h3>
                            </div>
                            
                            <div className="card-body bg-secondary text-light text-center p-4">
                                <i className="bi bi-controller h1 mb-3 d-block text-warning"></i> 
                                <p className="card-text">
                                    [Nome do Jogo/App] - Breve descrição do objetivo do Projeto 1 e tecnologia utilizada.
                                </p>
                                
                                {/* 2. CLASSE 'btn-hover-effect' e LINK aplicados ao botão */}
                                <Link 
                                    to="/projetos/detalhe" 
                                    className="btn btn-warning mt-3 btn-hover-effect"
                                >
                                    Ver Detalhes (Projeto 1)
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* CARTÃO DO PROJETO 2 */}
                    <div className="col-lg-5 col-md-6 mb-4">
                        <div 
                            className="card shadow-lg h-100 border-warning bg-secondary text-light"
                            style={{ cursor: 'default' }}
                        >
                            
                            <div className="card-header bg-dark text-warning border-bottom border-warning text-center">
                                <h3 className="mb-0">Projeto 2</h3>
                            </div>
                            
                            <div className="card-body bg-secondary text-light text-center p-4">
                                <i className="bi bi-gear h1 mb-3 d-block text-warning"></i> 
                                <p className="card-text">
                                    [Nome do Jogo/App] - Breve descrição do objetivo do Projeto 2 e tecnologia utilizada.
                                </p>
                                
                                <Link 
                                    to="/projetos/detalhe" 
                                    className="btn btn-warning mt-3 btn-hover-effect"
                                >
                                    Ver Detalhes (Projeto 2)
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botão de volta para o Portfólio (rodapé) */}
                <div className="text-center mt-5">
                    <Link to="/portfolio" className="btn btn-outline-warning btn-lg">
                        ← Voltar ao Portfólio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projetos;