// src/pages/EditAluno.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AlunoService from '../services/AlunoService';

const EditAluno = () => {
    const { id } = useParams();
    const [nome, setNome] = useState('');

    useEffect(() => {
        const fetchAluno = async () => {
            try {
                const response = await AlunoService.getAll(); // Substitua por uma chamada específica se necessário
                const aluno = response.data.find(aluno => aluno.id === id);
                setNome(aluno.nome);
            } catch (error) {
                console.error('Erro ao buscar aluno:', error);
            }
        };
        fetchAluno();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await AlunoService.update(id, { nome });
            alert('Aluno atualizado com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar aluno:', error);
        }
    };

    return (
        <div>
            <h2>Editar Aluno</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome do Aluno"
                    required
                />
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
};

export default EditAluno;
