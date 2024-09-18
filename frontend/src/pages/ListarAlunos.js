// src/pages/ListarAlunos.js
import React, { useState, useEffect } from 'react';
import AlunoService from '../services/AlunoService';

const ListarAlunos = () => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const response = await AlunoService.getAll();
                setAlunos(response.data);
            } catch (error) {
                console.error('Erro ao listar alunos:', error);
            }
        };
        fetchAlunos();
    }, []);
 
    return (
        <div>
            <h2>Listar Alunos</h2>
            <ul>
                {alunos.map(aluno => (
                    <li key={aluno.id}>{aluno.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListarAlunos;
