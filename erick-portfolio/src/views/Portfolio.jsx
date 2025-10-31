// src/views/Portfolio.jsx (NOVO CÓDIGO - Estrutura Corrigida e Tema Escuro)

import React from 'react';
import { Link } from 'react-router-dom';
// Vamos precisar de um arquivo CSS customizado para o hover
import '../Portfolio.css'; 

const Portfolio = () => {
    return (
        // Container principal: Fundo preto (bg-dark) e texto claro (text-light)
        <div className="container-fluid min-vh-100 bg-dark text-light pt-5 pb-5">
            <div className="container">
                
                {/* Título e Nome */}
                <header className="text-center mb-5 border-bottom border-secondary pb-3">
                    <h1 className="display-4 text-light">Portfólio</h1>
                    <h2 className="text-warning">Erick Henrique</h2>
                </header>

                <div className="row justify-content-center"> 
                    {/* Agora, todo o conteúdo está em uma única coluna principal */}
                    <div className="col-lg-10"> 
                        
                        {/* Conteúdo Principal (Introdução) */}
                        <p className="lead text-white-50">
                            Olá! Bem-vindo ao meu portfólio. Sou apaixonado por desenvolvimento de jogos 
                            e esta página é dedicada a mostrar um pouco da minha trajetória e projetos.
                        </p>
                        
                        <div className="mt-4 p-4 bg-secondary rounded shadow">
                            <p className="text-light">
                                [Insira aqui mais texto sobre suas habilidades e paixões. Fale sobre o Roblox Studio, Linguagens (como Lua), e o que te move.]
                            </p>
                        </div>

                        {/* SEÇÃO DOS LINKS DE NAVEGAÇÃO (Imagens 1 e 2 do rascunho) */}
                        <h3 className="text-center text-warning mt-5 mb-4">Acesse Meu Trabalho</h3>
                        <div className="row mt-4 justify-content-center">
                            
                            {/* Link para PROJETOS (Anteriormente 'Imagem 1') */}
                            <div className="col-md-5 mb-3">
                                {/* Usamos a classe 'nav-card' para o CSS customizado */}
                                <Link to="/projetos" className="nav-card text-decoration-none d-block">
                                    <div className="p-5 border border-warning text-center bg-dark text-warning rounded shadow-lg">
                                        <i className="bi bi-code-slash h1 mb-3 d-block"></i> {/* Ícone de código, se você tiver Bootstrap Icons */}
                                        <h4 className='mb-0'>PROJETOS</h4>
                                        <small>Veja meus jogos e criações.</small>
                                    </div>
                                </Link>
                            </div>
                            
                            {/* Link para JORNADA (Anteriormente 'Imagem 2') */}
                            <div className="col-md-5 mb-3">
                                <Link to="/jornada" className="nav-card text-decoration-none d-block">
                                    <div className="p-5 border border-warning text-center bg-dark text-warning rounded shadow-lg">
                                        <i className="bi bi-person-lines-fill h1 mb-3 d-block"></i> {/* Ícone de perfil */}
                                        <h4 className='mb-0'>MINHA JORNADA</h4>
                                        <small>Minha história e formação.</small>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;