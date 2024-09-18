import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AlunoService from '../services/AlunoService';

const EditAluno = () => {
    const { id } = useParams();
    const [nome, setNome] = useState('');

    useEffect(() => {
        const fetchAluno = async () => {
            try {
                const response = await AlunoService.getById(id); // Chamada específica para buscar o aluno pelo ID
                setNome(response.data.nome);
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

    const handleNomeChange = (e) => {
        try {
            setNome(e.target.value);
        } catch (error) {
            console.error('Erro ao atualizar nome:', error);
        }
    };

    return (
        <div>
            <h2>Editar Aluno</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nome}
                    onChange={handleNomeChange}
                    placeholder="Nome do Aluno"
                    aria-label="Nome do Aluno"
                    required
                />
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
};

export default EditAluno;