// src/views/Login.jsx (Versão com Validação RÍGIDA de Nome/Sobrenome)

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    // REGEX para Email (Formato básico)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // REGEX para Nomes: Permite Letras (incluindo acentos/ç), espaços e hífens.
    // Isso impede números ou caracteres especiais aleatórios.
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/; 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // --- 1. VALIDAÇÃO DE NOME E SOBRENOME (Formato e Tamanho) ---
        
        // Verifica se o NOME tem o formato correto E tamanho mínimo de 2
        if (nome.trim().length < 2 || !nameRegex.test(nome.trim())) {
            isValid = false;
        }
        
        // Verifica se o SOBRENOME tem o formato correto E tamanho mínimo de 2
        if (sobrenome.trim().length < 2 || !nameRegex.test(sobrenome.trim())) {
            isValid = false;
        }

        // --- 2. VALIDAÇÃO DE EMAIL ---
        if (!emailRegex.test(email.trim())) {
            isValid = false;
        }

        if (isValid) {
            // Se tudo estiver válido, define o formulário como validado e navega
            setValidated(true);
            // Mensagem simples de sucesso
            alert(`Acesso liberado para: ${nome} ${sobrenome}`);
            navigate('/portfolio');
        } else {
            // Se falhar, define o estado para que as mensagens de erro do Bootstrap apareçam
            setValidated(true); 
            // Não exibimos um alert geral aqui, pois o feedback do Bootstrap é mais limpo.
        }
    };

    return (
        <div className="container-fluid vh-100 bg-dark d-flex justify-content-center align-items-center">
            <div className="card shadow-lg p-4 bg-secondary text-light" style={{ maxWidth: '450px', width: '100%' }}>
                <h2 className="card-title text-center mb-4 text-warning">Acessar Portfólio</h2>
                
                <form 
                    onSubmit={handleSubmit} 
                    className={validated ? 'was-validated' : 'needs-validation'} 
                    noValidate
                > 
                    
                    {/* CAMPO EMAIL */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                        <div className="invalid-feedback">
                            Por favor, insira um formato de email válido (ex: seu@email.com).
                        </div>
                    </div>
                    
                    {/* CAMPO NOME - Validação Reforçada */}
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nome" 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required 
                            // O padrão (pattern) HTML5 pode ajudar na validação inicial
                            pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,}" 
                        />
                        <div className="invalid-feedback">
                            O nome deve ser composto apenas por letras (mínimo 2) e não pode conter números ou símbolos.
                        </div>
                    </div>

                    {/* CAMPO SOBRENOME - Validação Reforçada */}
                    <div className="mb-4">
                        <label htmlFor="sobrenome" className="form-label">Sobrenome:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="sobrenome" 
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}
                            required 
                            // O padrão (pattern) HTML5 pode ajudar na validação inicial
                            pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,}" 
                        />
                        <div className="invalid-feedback">
                            O sobrenome deve ser composto apenas por letras (mínimo 2) e não pode conter números ou símbolos.
                        </div>
                    </div>
                    
                    {/* Botão Entrar */}
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-warning btn-lg">
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;