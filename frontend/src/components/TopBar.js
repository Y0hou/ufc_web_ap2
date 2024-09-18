// src/components/TopBar.js
import React from 'react';

const TopBar = () => {
    return (
        <div className="top-bar">
            <h1>Aluno CRUD</h1>
            <nav>
                <select onChange={(e) => window.location.href = e.target.value}>
                    <option value="/create">Criar Aluno</option>
                    <option value="/edit">Editar Aluno</option>
                    <option value="/remove">Remover Aluno</option>
                    <option value="/list">Listar Alunos</option>
                </select>
            </nav>
        </div>
    );
};

export default TopBar;
