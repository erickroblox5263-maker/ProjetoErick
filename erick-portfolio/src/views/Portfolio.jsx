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
                    <h1 className="display-4 text-light">𝙋𝙤𝙧𝙩𝙛𝙤𝙡𝙞𝙤</h1>
                    <h2 className="text-warning">Eʀɪᴄᴋ Hᴇɴʀɪǫᴜᴇ</h2>
                </header>

                <div className="row justify-content-center"> 
                    {/* Agora, todo o conteúdo está em uma única coluna principal */}
                    <div className="col-lg-10"> 
                        
                        {/* Conteúdo Principal (Introdução) */}
                        <p className="lead text-white-50">
                            Oʟᴀ́! Bᴇᴍ-ᴠɪɴᴅᴏ ᴀᴏ ᴍᴇᴜ ᴘᴏʀᴛғᴏ́ʟɪᴏ. Sᴏᴜ ᴀᴘᴀɪxᴏɴᴀᴅᴏ ᴘᴏʀ ᴅᴇsᴇɴᴠᴏʟᴠɪᴍᴇɴᴛᴏ ᴅᴇ ᴊᴏɢᴏs ᴇ ᴇsᴛᴀ ᴘᴀ́ɢɪɴᴀ ᴇ́ ᴅᴇᴅɪᴄᴀᴅᴀ ᴀ ᴍᴏsᴛʀᴀʀ ᴜᴍ ᴘᴏᴜᴄᴏ ᴅᴀ ᴍɪɴʜᴀ ᴛʀᴀᴊᴇᴛᴏ́ʀɪᴀ ᴇ ᴘʀᴏᴊᴇᴛᴏs.
                        </p>
                        
                        <div className="mt-4 p-4 bg-secondary rounded shadow">
                            <p className="text-light">
[𝙀𝙪 𝙢𝙚 𝙖𝙫𝙚𝙣𝙩𝙪𝙧𝙚𝙞 𝙗𝙖𝙨𝙩𝙖𝙣𝙩𝙚 𝙣𝙖 𝙖̀𝙧𝙚𝙖 𝙙𝙚 𝙥𝙧𝙤𝙜𝙧𝙖𝙢𝙖𝙘̧𝙖̃𝙤 𝙙𝙚𝙨𝙙𝙚 2022 𝙤𝙣𝙙𝙚 𝙥𝙚𝙧𝙘𝙚𝙗𝙞 𝙤 𝙦𝙪𝙖̃𝙤 𝙗𝙤𝙢 𝙚𝙧𝙖 𝙥𝙖𝙧𝙖 𝙢𝙞𝙢 𝙢𝙚 𝙚𝙣𝙫𝙤𝙡𝙫𝙚𝙧 𝙣𝙚𝙨𝙩𝙚 𝙖𝙨𝙨𝙪𝙣𝙩𝙤 𝙖𝙤 𝙩𝙚𝙨𝙩𝙖𝙧 𝙢𝙚𝙪𝙨 𝙡𝙞𝙢𝙞𝙩𝙚𝙨, 𝙖𝙦𝙪𝙞 𝙖𝙥𝙧𝙚𝙨𝙚𝙣𝙩𝙖𝙧𝙚𝙞 𝙥𝙧𝙤𝙟𝙚𝙩𝙤𝙨 𝙢𝙚𝙪𝙨, 𝙢𝙞𝙣𝙝𝙖 𝙚𝙭𝙥𝙚𝙧𝙞𝙚̂𝙣𝙘𝙞𝙖 𝙣𝙖 𝙩𝙚𝙘𝙝𝙚𝙧𝙨 𝙚 𝙚𝙢 𝙥𝙧𝙤𝙜𝙧𝙖𝙢𝙖𝙘̧𝙖̃𝙤 𝙟𝙪𝙣𝙩𝙤 𝙘𝙤𝙢 𝙢𝙞𝙣𝙝𝙖 𝙚𝙫𝙤𝙡𝙪𝙘̧𝙖̃𝙤. 𝙐𝙢 𝙥𝙤𝙪𝙘𝙤 𝙨𝙤𝙗𝙧𝙚 𝙢𝙞𝙢 𝙚́ 𝙦𝙪𝙚 𝙚𝙪 𝙢𝙚 𝙖𝙥𝙧𝙚𝙨𝙚𝙣𝙩𝙤 𝙘𝙤𝙢𝙤 𝙪𝙢𝙖 𝙥𝙚𝙨𝙨𝙤𝙖 𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙨𝙖𝙙𝙖 𝙚𝙢 𝙩𝙤𝙙𝙤𝙨 𝙤𝙨 𝙖𝙨𝙨𝙪𝙣𝙩𝙤𝙨 𝙦𝙪𝙚 𝙚𝙪 𝙢𝙚 𝙚𝙣𝙫𝙤𝙡𝙫𝙤 𝙚 𝙙𝙚 𝙧𝙖́𝙥𝙞𝙙𝙤 𝙖𝙥𝙧𝙚𝙣𝙙𝙞𝙯𝙖𝙙𝙤, 𝙜𝙤𝙨𝙩𝙤 𝙙𝙚 𝙟𝙤𝙜𝙖𝙧 𝙗𝙖𝙨𝙩𝙖𝙣𝙩𝙚 𝙟𝙤𝙜𝙤𝙨 𝙫𝙞𝙧𝙩𝙪𝙖𝙞𝙨, 𝙢𝙚 𝙚𝙭𝙚𝙧𝙘𝙞𝙩𝙖𝙧 𝙚 𝙤𝙪𝙫𝙞𝙧 𝙢𝙪́𝙨𝙞𝙘𝙖.]                            </p>
                        </div>

                        {/* SEÇÃO DOS LINKS DE NAVEGAÇÃO (Imagens 1 e 2 do rascunho) */}
                        <h3 className="text-center text-warning mt-5 mb-4">𝔸𝕔𝕖𝕤𝕤𝕖 𝕄𝕖𝕦 𝕋𝕣𝕒𝕓𝕒𝕝𝕙𝕠</h3>
                        <div className="row mt-4 justify-content-center">
                            
                            {/* Link para PROJETOS (Anteriormente 'Imagem 1') */}
                            <div className="col-md-5 mb-3">
                                {/* Usamos a classe 'nav-card' para o CSS customizado */}
                                <Link to="/projetos" className="nav-card text-decoration-none d-block">
                                    <div className="p-5 border border-warning text-center bg-dark text-warning rounded shadow-lg">
                                        <i className="bi bi-code-slash h1 mb-3 d-block"></i> {/* Ícone de código, se você tiver Bootstrap Icons */}
                                        <h4 className='mb-0'>𝐏𝐑𝐎𝐉𝐄𝐓𝐎𝐒</h4>
                                        <small>𝕍𝕖𝕛𝕒 𝕞𝕖𝕦𝕤 𝕛𝕠𝕘𝕠𝕤 𝕖 𝕔𝕣𝕚𝕒𝕔̧𝕠̃𝕖𝕤.</small>
                                    </div>
                                </Link>
                            </div>
                            
                            {/* Link para JORNADA (Anteriormente 'Imagem 2') */}
                            <div className="col-md-5 mb-3">
                                <Link to="/jornada" className="nav-card text-decoration-none d-block">
                                    <div className="p-5 border border-warning text-center bg-dark text-warning rounded shadow-lg">
                                        <i className="bi bi-person-lines-fill h1 mb-3 d-block"></i> {/* Ícone de perfil */}
                                        <h4 className='mb-0'>𝐌𝐈𝐍𝐇𝐀 𝐉𝐎𝐑𝐍𝐀𝐃𝐀</h4>
                                        <small>𝕄𝕚𝕟𝕙𝕒 𝕙𝕚𝕤𝕥𝕠́𝕣𝕚𝕒 𝕖 𝕗𝕠𝕣𝕞𝕒𝕔̧𝕒̃𝕠.</small>
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