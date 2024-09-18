import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AlunoService from '../services/AlunoService';

const EditAluno = () => {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [ira, setIra] = useState('');

    useEffect(() => {
        const fetchAluno = async () => {
            try {
                const response = await AlunoService.getById(id); 
                setNome(response.data.nome);
                setCurso(response.data.curso);
                setIra(response.data.ira);
            } catch (error) {
                console.error('Erro ao buscar aluno:', error);
            }
        }; 
        fetchAluno();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await AlunoService.update(id, { nome, curso, ira });
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

    const handleCursoChange = (e) => {
        try {
            setCurso(e.target.value);
        } catch (error) {
            console.error('Erro ao atualizar curso:', error);
        }
    };

    const handleIraChange = (e) => {
        try {
            setIra(e.target.value);
        } catch (error) {
            console.error('Erro ao atualizar IRA:', error);
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
                <input
                    type="text"
                    value={curso}
                    onChange={handleCursoChange}
                    placeholder="Curso do Aluno"
                    aria-label="Curso do Aluno"
                    required
                />
                <input
                    type="number"
                    value={ira}
                    onChange={handleIraChange}
                    placeholder="IRA do Aluno"
                    aria-label="IRA do Aluno"
                    required
                />
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
};

export default EditAluno;