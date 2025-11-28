// src/views/Jornada.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORTAÇÃO DAS IMAGENS: Usando o nome do arquivo que você inseriu no assets.
import minhaFoto from '../assets/images.jfif'; 
import eu from '../assets/Eu.jfif'; 
// Se a foto da escola estiver pronta, ajuste a importação (ex: import fotoEscola from '../assets/foto-escola.png';)

const Jornada = () => {
    return (
        // Container principal: Fundo preto e altura mínima da tela
        <div className="container-fluid min-vh-100 bg-dark text-light pt-5 pb-5">
            <div className="container">
                
                <header className="text-center mb-5 border-bottom border-secondary pb-3">
                    <h1 className="display-4 text-light">Mɪɴʜᴀ Jᴏʀɴᴀᴅᴀ</h1>
                    <h2 className="text-warning">𝗧𝗿𝗮𝗷𝗲𝘁𝗼́𝗿𝗶𝗮 𝗲 𝗔𝗽𝗿𝗲𝗻𝗱𝗶𝘇𝗮𝗱𝗼</h2>
                </header>
                
                <div className="row">
                    
                    {/* Coluna 1: Fotos (col-lg-4) */}
                    <div className="col-lg-4 mb-4">
                        
                        {/* 1. FOTO DA ESCOLA (AGORA NO TOPO) */}
                        <div className="card shadow-lg mb-4 border-warning bg-secondary text-light">
                            
                            {/* Bloco da primeira imagem: Placeholder centralizado (Escola) */}
                            <div className="d-flex justify-content-center align-items-center bg-dark p-0" style={{ height: '250px', overflow: 'hidden' }}>
                                <img 
                                    src={eu} // Sua imagem importada (images.jfif)
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
                            
                            {/* CARD BODY: Texto de descrição (SEM O TÍTULO "FOTO DA MINHA ESCOLA") */}
                            <div className="card-body bg-dark border-top border-warning">
                                <p className="card-text">
                                    Eu: Minhas motivações é minha família e minha vontade de aprender a desenvolver, gosto de descobrir coisas novas e meu gosto por programação veio desde cedo por interesse.
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
                                    Meu curso: um ótimo curso para começar do zero e que veio me preparando desde o início da melhor forma, tenho muito a agradecer por tudo que me ensinaram e fizeram por mim.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Coluna 2: Texto Principal (col-lg-8) */}
                    <div className="col-lg-8">
                        <div className="card shadow-lg p-4 h-100 border-warning bg-secondary text-light">
                            <h3 className="mb-4 text-warning">𝔐𝔦𝔫𝔥𝔞 ℌ𝔦𝔰𝔱𝔬́𝔯𝔦𝔞 𝔫𝔬 𝔇𝔢𝔰𝔢𝔫𝔳𝔬𝔩𝔳𝔦𝔪𝔢𝔫𝔱𝔬</h3>
                            <p className="lead">
                                [**Iɴɪ́ᴄɪᴏ ᴇ Iɴsᴘɪʀᴀᴄ̧ᴀ̃ᴏ:**] Mᴇᴜ ɪɴᴛᴇʀᴇssᴇ ᴘᴏʀ ᴘʀᴏɢʀᴀᴍᴀᴄ̧ᴀ̃ᴏ ᴄᴏᴍᴇᴄ̧ᴏᴜ ǫᴜᴀɴᴅᴏ ᴄᴏᴍᴇᴄᴇɪ ᴇᴜ ᴍᴇsᴍᴏ ᴀ ᴄʀɪᴀʀ ᴊᴏɢᴏs ɴᴏ ᴀᴘʟɪᴄᴀᴛɪᴠᴏ ʀᴏʙʟᴏx, ᴄᴏᴍᴇᴄᴇɪ ᴅᴏ ᴢᴇʀᴏ ғᴀᴢᴇɴᴅᴏ ᴊᴏɢᴏs ʙᴀ́sɪᴄᴏs ᴇ ᴅᴇ ǫᴜᴀʟǫᴜᴇʀ ᴊᴇɪᴛᴏ, ᴀᴛᴇ́ ǫᴜᴇ ᴇᴜ ғᴜɪ ᴇᴠᴏʟᴜɪɴᴅᴏ ᴇ ʜᴏᴊᴇ ᴊᴀ́ ᴛᴇɴʜᴏ ᴍᴀɪs ᴅᴇ 100 ᴊᴏɢᴏs ғᴇɪᴛᴏs ɴᴏ ʀᴏʙʟᴏx sᴏ́ ᴅᴇ ʙʀɪɴᴄᴀᴅᴇɪʀᴀ ᴇ ᴛʀᴇɪɴᴏ, ғᴏɪ ᴀɪ́ ǫᴜᴇ ᴅᴇsᴄᴏʙʀɪ ᴍɪɴʜᴀ ᴘᴀɪxᴀ̃ᴏ ᴘᴏʀ ᴘʀᴏɢʀᴀᴍᴀᴄ̧ᴀ̃ᴏ ᴇ ғᴏʀᴀᴍ 4 ᴀɴᴏs ᴄʀɪᴀɴᴅᴏ ᴊᴏɢᴏs ɴᴏ ʀᴏʙʟᴏx ǫᴜᴀɴᴅᴏ ᴄᴏɴʜᴇᴄɪ ᴀ ᴛᴇᴄʜᴇʀs ʟᴏɢᴏ ᴅᴇᴘᴏɪs ᴇ ʀᴇᴀʟᴍᴇɴᴛᴇ ᴄᴏᴍᴇᴄᴇɪ ᴀ ᴍᴇ ᴀᴘʀᴏғᴜɴᴅᴀʀ ɴɪssᴏ ᴛᴜᴅᴏ.
                            </p>
                            <p>
                                [**Fᴏʀᴍᴀᴄ̧ᴀ̃ᴏ:**] Mɪɴʜᴀ ᴇxᴘᴇʀɪᴇ̂ɴᴄɪᴀ ɴᴀ ᴛᴇᴄʜᴇʀs ғᴏɪ sᴇɴsᴀᴄɪᴏɴᴀʟ, ᴅᴇsᴄᴏʙʀɪ ᴀᴏs ᴘᴏᴜᴄᴏs ᴏ ᴍᴜɴᴅᴏ ᴅᴇ ᴘʀᴏɢʀᴀᴍᴀᴄ̧ᴀ̃ᴏ ᴇ sᴜᴀs ᴅɪᴠᴇʀsᴀs ʟɪɴɢᴜᴀɢᴇɴs ᴄᴏᴍᴏ ᴘʏᴛʜᴏɴ, ʟᴜᴀ ᴇ ᴅᴇɴᴛʀᴇ ᴏᴜᴛʀᴏs, ɴᴏ ɪɴɪ́ᴄɪᴏ ғɪǫᴜᴇɪ ᴀɴsɪᴏsᴏ ᴇ ʀᴇᴄᴇɪᴏsᴏ ᴅᴇ ᴛᴀɴᴛᴀ ᴄᴏɪsᴀ ǫᴜᴇ ᴇᴜ ᴛᴇʀɪᴀ ǫᴜᴇ ᴀᴘʀᴇɴᴅᴇʀ, ᴍᴀs ᴄᴏᴍ ᴏ ᴛᴇᴍᴘᴏ ᴘᴇʀᴄᴇʙɪ ǫᴜᴇ ɴᴀ̃ᴏ ᴇʀᴀ ᴜᴍ ʙɪxᴏ ᴅᴇ ᴄɪɴᴄᴏ ᴄᴀʙᴇᴄ̧ᴀs ᴇ sɪᴍ ᴜᴍᴀ ᴇxᴘᴇʀɪᴇ̂ɴᴄɪᴀ ᴜ́ɴɪᴄᴀ ǫᴜᴇ ʀᴇǫᴜᴇʀ ᴅᴇᴅɪᴄᴀᴄ̧ᴀ̃ᴏ ᴘᴀʀᴀ ᴀᴘʀᴇɴᴅᴇʀ, ᴀ ᴍɪɴʜᴀ ᴇsᴄᴏʟᴀ ᴍᴇ ᴀᴊᴜᴅᴏᴜ ʙᴀsᴛᴀɴᴛᴇ ᴇᴍ ʀᴇʟᴀᴄ̧ᴀ̃ᴏ ᴛᴜᴅᴏ ɪssᴏ ᴇ ᴍᴇ ᴀᴊᴜᴅᴀ ᴄᴀᴅᴀ ᴠᴇᴢ ᴍᴀɪs ᴀ ᴀʟᴄᴀɴᴄ̧ᴀʀ ᴍᴇᴜs ᴏʙᴊᴇᴛɪᴠᴏs
                            </p>
                            <p>
                                [**Cʀᴇsᴄɪᴍᴇɴᴛᴏ:**] Cᴏᴍᴇᴄᴇɪ ᴘʀᴏɢʀᴀᴍᴀɴᴅᴏ ɴᴀ ᴘʟᴀᴛᴀғᴏʀᴍᴀ Cᴏɴsᴛʀᴜᴄᴛ ᴀǫᴜɪ ɴᴀ ᴇsᴄᴏʟᴀ, ɴᴀ̃ᴏ ғᴏɪ ᴛᴀ̃ᴏ ᴅɪ́ғɪᴄɪʟ ᴊᴀ́ ǫᴜᴇ ᴇᴜ ᴛɪɴʜᴀ ᴜᴍ ᴀᴘʀᴇɴᴅɪᴢᴀᴅᴏ ʙᴀ́sɪᴄᴏ ᴀɴᴛᴇs ᴇ ᴇʀᴀ ᴘʀᴏɢʀᴀᴍᴀᴄ̧ᴀ̃ᴏ ᴊᴀ́ ᴘʀᴏɴᴛᴀ ᴇᴍ ʙʟᴏᴄᴏs ǫᴜᴇ sᴏ́ ʙᴀsᴛᴀᴠᴀ ᴄᴏɴᴇᴄᴛᴀʀ ᴛᴏᴅᴀs ᴇʟᴀs ᴅᴇ ᴀᴄᴏʀᴅᴏ ᴄᴏᴍ ᴏ sᴇᴜ ᴏʙᴊᴇᴛɪᴠᴏ, ғᴏɪ ɴᴇsᴛᴇ ᴍᴏᴍᴇɴᴛᴏ ǫᴜᴇ ᴘᴇʀᴄᴇʙɪ ᴀ ᴅɪғᴇʀᴇɴᴄ̧ᴀ ᴅᴇ ᴘʀᴏɢʀᴀᴍᴀᴄ̧ᴏ̃ᴇs ᴇ sᴇᴜs ɴɪ́ᴠᴇɪs ᴅᴇ ᴅɪғɪᴄᴜʟᴅᴀᴅᴇ. Pᴀʀᴀ ᴍɪᴍ ᴀ ᴘᴀʀᴛᴇ ᴍᴀɪs ᴅɪ́ғɪᴄɪʟ ғᴏɪ ᴀ ᴘᴀʀᴛᴇ ᴅᴇ ᴘʀᴏɢʀᴀᴍᴀʀ ᴇsᴄʀᴇᴠᴇɴᴅᴏ ᴛᴜᴅᴏ ᴅᴏ ᴢᴇʀᴏ ᴀᴘᴇɴᴀs ᴄᴏᴍ sᴇᴜ ᴄᴏɴʜᴇᴄɪᴍᴇɴᴛᴏ, ᴀɪɴᴅᴀ ᴇ́ ʜᴏᴊᴇ ᴇᴍ ᴅɪᴀ ᴜᴍ ᴘᴏᴜᴄᴏ ᴄᴏᴍᴘʟɪᴄᴀᴅᴏ ᴘᴀʀᴀ ᴍɪᴍ, ᴍᴀs ᴇᴜ ᴇᴠᴏʟᴜɪ ʙᴀsᴛᴀɴᴛᴇ ᴅᴇsᴅᴇ ǫᴜᴇ ᴄᴏᴍᴇᴄᴇɪ ᴇ sᴇɪ ᴍᴀɪs ᴅᴏ ǫᴜᴇ ɪɴɪᴄɪᴀʟᴍᴇɴᴛᴇ, ᴇɴᴛᴀ̃ᴏ ᴇ́ ᴛᴜᴅᴏ ǫᴜᴇsᴛᴀ̃ᴏ ᴅᴇ ᴛᴇᴍᴘᴏ.
                            </p>
                            <p>
                                [**Mᴇᴛᴀs:**] E ᴘᴀʀᴀ ғɪɴᴀʟɪᴢᴀʀᴍᴏs, ᴇᴜ ᴅᴇsᴇᴊᴏ sᴇʀ ᴛᴇ́ᴄɴɪᴄᴏ ᴅᴇ sɪsᴛᴇᴍᴀs ᴇ ᴅᴇsᴇɴᴠᴏʟᴠᴇᴅᴏʀ ᴅᴇ ᴊᴏɢᴏs ғᴜᴛᴜʀᴀᴍᴇɴᴛᴇ ᴀʟᴇ́ᴍ ᴅᴇ ᴅᴇsᴇɴᴠᴏʟᴠᴇʀ ʜᴀʙɪʟɪᴅᴀᴅᴇs ᴇxᴄᴇᴘᴄɪᴏɴᴀɪs ᴇ ᴍᴇ ᴛᴏʀɴᴀʀ ᴍᴇʟʜᴏʀ ᴀ ᴄᴀᴅᴀ ᴅɪᴀ.
                            </p>
                            
                            {/* Botão de volta para o Portfólio */}
                            <div className="text-center mt-auto pt-4">
                                <Link to="/portfolio" className="btn btn-outline-warning btn-lg">
                                    ←　Ｖｏｌｔａｒ　ａｏ　Ｐｏｒｔｆóｌｉｏ
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