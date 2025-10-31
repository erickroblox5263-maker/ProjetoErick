// src/views/Projetos.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Projetos = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-5 text-success">Meus Projetos</h1>
            <div className="row justify-content-center">
                
                {/* Card do Projeto 1 */}
                <div className="col-md-5 mb-4">
                    <div className="card shadow h-100 border-success">
                        <div className="card-body">
                            <h2 className="card-title text-success">Projeto 1</h2>
                            <p className="card-text">
                                [Breve introdução sobre o Projeto 1. Fale sobre o objetivo e o que ele faz.]
                            </p>
                            <Link 
                                to="/projetos/detalhe" 
                                className="btn btn-success"
                            >
                                Ver Detalhes (Projeto 1)
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card do Projeto 2 */}
                <div className="col-md-5 mb-4">
                    <div className="card shadow h-100 border-success">
                        <div className="card-body">
                            <h2 className="card-title text-success">Projeto 2</h2>
                            <p className="card-text">
                                [Breve introdução sobre o Projeto 2. Fale sobre o objetivo e o que ele faz.]
                            </p>
                            <Link 
                                to="/projetos/detalhe" 
                                className="btn btn-success"
                            >
                                Ver Detalhes (Projeto 2)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Botão de volta para o Portfólio */}
            <div className="text-center mt-4">
                <Link to="/portfolio" className="btn btn-outline-secondary">
                    ← Voltar ao Portfólio
                </Link>
            </div>
        </div>
    );
};

export default Projetos;