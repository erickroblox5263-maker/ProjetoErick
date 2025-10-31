// src/views/Jornada.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORTAÇÃO DAS IMAGENS: Usando o nome do arquivo que você inseriu no assets.
import minhaFoto from '../assets/images.jfif'; 
// Se a foto da escola estiver pronta, ajuste a importação (ex: import fotoEscola from '../assets/foto-escola.png';)

const Jornada = () => {
    return (
        // Container principal: Fundo preto e altura mínima da tela
        <div className="container-fluid min-vh-100 bg-dark text-light pt-5 pb-5">
            <div className="container">
                
                <header className="text-center mb-5 border-bottom border-secondary pb-3">
                    <h1 className="display-4 text-light">Minha Jornada</h1>
                    <h2 className="text-warning">Trajetória e Aprendizado</h2>
                </header>
                
                <div className="row">
                    
                    {/* Coluna 1: Fotos (col-lg-4) */}
                    <div className="col-lg-4 mb-4">
                        
                        {/* 1. FOTO DA ESCOLA (AGORA NO TOPO) */}
                        <div className="card shadow-lg mb-4 border-warning bg-secondary text-light">
                            
                            {/* Bloco da primeira imagem: Placeholder centralizado (Escola) */}
                            <div className="d-flex justify-content-center align-items-center bg-dark p-0" style={{ height: '250px', overflow: 'hidden' }}>
                                <i className="bi bi-mortarboard h1 text-warning d-block my-4"></i>
                                {/* Se a foto da escola estiver pronta, substitua <i> pela tag <img> */}
                            </div>
                            
                            {/* CARD BODY: Texto de descrição (SEM O TÍTULO "FOTO DA MINHA ESCOLA") */}
                            <div className="card-body bg-dark border-top border-warning">
                                <p className="card-text">
                                    Detalhes sobre o curso técnico, as principais disciplinas e como a escola me preparou para o TCC.
                                </p>
                            </div>
                        </div>
                        
                        {/* 2. FOTO MINHA (AGORA EM BAIXO) */}
                        <div className="card shadow-lg border-warning bg-secondary text-light">
                            
                            {/* BLOCO DA IMAGEM: Sua foto preenchendo o quadrado */}
                            <div 
                                className="d-flex justify-content-center align-items-center bg-dark p-0" 
                                style={{ height: '250px', overflow: 'hidden' }}
                            >
                                <img 
                                    src={minhaFoto} // Sua imagem importada (images.jfif)
                                    className="img-fluid" 
                                    alt="Foto de Perfil de Erick"
                                    // ESTILOS PARA PREENCHER O QUADRADO
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover' // Faz a imagem cobrir todo o espaço
                                    }}
                                /> 
                            </div>
                            
                            {/* CARD BODY: Texto de descrição (SEM O TÍTULO "FOTO MINHA") */}
                            <div className="card-body bg-dark border-top border-warning">
                                <p className="card-text">
                                    Minhas motivações, paixões fora da programação e o que me inspira a desenvolver jogos.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Coluna 2: Texto Principal (col-lg-8) */}
                    <div className="col-lg-8">
                        <div className="card shadow-lg p-4 h-100 border-warning bg-secondary text-light">
                            <h3 className="mb-4 text-warning">Minha História no Desenvolvimento</h3>
                            <p className="lead">
                                [**Início e Inspiração:**] Aqui você descreverá quando e como começou seu interesse por programação e jogos, especialmente no ambiente Roblox.
                            </p>
                            <p>
                                [**Formação:**] Detalhe sua experiência na escola/curso técnico. Fale sobre as linguagens aprendidas (Lua, se for o caso), as metodologias e os desafios.
                            </p>
                            <p>
                                [**Crescimento e Metas:**] Descreva como você evoluiu como desenvolvedor. Quais foram os projetos mais importantes (além dos do TCC)? Onde você espera chegar no futuro com suas habilidades?
                            </p>
                            <p>
                                [**Texto Adicional:**] Preencha esta área com mais conteúdo para que o layout fique visualmente completo.
                            </p>
                            
                            {/* Botão de volta para o Portfólio */}
                            <div className="text-center mt-auto pt-4">
                                <Link to="/portfolio" className="btn btn-outline-warning btn-lg">
                                    ← Voltar ao Portfólio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jornada;