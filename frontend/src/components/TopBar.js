import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        navigate(e.target.value);
    };

    return (
        <div className="top-bar">
            <h1>Aluno CRUD</h1>
            <nav>
                <select onChange={handleNavigation} aria-label="Navegação de Alunos">
                    <option value="/create">Criar Aluno</option>
                    <option value="/edit">Editar Aluno</option>
                    <option value="/remove">Remover Aluno</option>
                    <option value="/list">Listar Alunos</option>
                    <option value="/list-by-course">Listar por Curso</option>
                </select>
            </nav>
        </div>
    ); 
};

export default TopBar;