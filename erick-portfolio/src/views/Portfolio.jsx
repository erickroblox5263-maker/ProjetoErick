// src/views/Portfolio.jsx (APENAS MINHA JORNADA)

import React from 'react';
import { Link } from 'react-router-dom';
import '../Portfolio.css'; 

const Portfolio = () => {
    return (
        <div className="container-fluid min-vh-100 bg-dark text-light pt-5 pb-5">
            <div className="container">
                
                <header className="text-center mb-5 border-bottom border-warning pb-3">
                    <h1 className="display-3 text-warning">𝔼𝕣𝕚𝕔𝕜</h1>
                    <p className="lead text-light">𝗣𝗼𝗿𝘁𝗳𝗼́𝗹𝗶𝗼 𝗣𝗲𝘀𝘀𝗼𝗮𝗹 𝗲 𝗧𝗿𝗮𝗷𝗲𝘁𝗼́𝗿𝗶𝗮</p>
                </header>
                
                <div className="row mt-5">
                    
                    {/* Coluna 1: Texto e Habilidades */}
                    <div className="col-lg-8 mb-4">
                        <div className="card shadow-lg p-4 h-100 border-warning bg-secondary text-light">
                            <h3 className="mb-4 text-warning">Sobre Mim</h3>
                            <p className="lead">
                                [Bem-vindo ao meu portfólio, falarei sobre mim e minha escola, sinta-se em casa e pegue um café. ☕].
                            </p>
                            <h5 className="mt-4 text-light">Habilidades Principais:</h5>
                            <ul className="list-group list-group-flush bg-secondary">
                                <li className="list-group-item bg-secondary text-light border-warning">Lógica de Programação com Lua (Roblox Studio)</li>
                                <li className="list-group-item bg-secondary text-light border-warning">Desenvolvimento Front-end (React/Bootstrap)</li>
                                <li className="list-group-item bg-secondary text-light border-warning">Modelador de Blender/Dentre Outros</li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Coluna 2: Navegação Rápida (APENAS JORNADA) */}
                    <div className="col-lg-4 mb-4">
                        <div className="card shadow-lg p-3 h-100 border-warning bg-warning text-dark">
                            <h4 className="text-center mb-3">Navegação Rápida</h4>
                            <div className="d-grid gap-3">
                                
                                {/* BOTÃO MINHA JORNADA (ÚNICO BOTÃO) */}
                                <Link to="/jornada" className="nav-card text-decoration-none d-block">
                                    <button className="btn btn-dark btn-lg shadow-sm text-warning w-100">
                                        ＭＩＮＨＡ　ＪＯＲＮＡＤＡ
                                    </button>
                                </Link>
                                
                                {/* REMOVIDO: Link para Projetos */}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* REMOVIDO: SEÇÃO DE VISUAIS DE PROJETOS */}
                <div className="text-center mt-5 pt-4 border-top border-secondary">
                    <p className="text-white-50">Use a seção "Minha Jornada" para saber mais sobre minha trajetória profissional e acadêmica.</p>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;