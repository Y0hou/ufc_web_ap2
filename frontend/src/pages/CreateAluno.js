import React, { useState } from 'react';
import AlunoService from '../services/AlunoService';

const CreateAluno = () => {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [ira, setIra] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await AlunoService.create({ nome, curso, ira });
            alert('Aluno criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar aluno:', error);
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
            <h2>Criar Aluno</h2>
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
                <button type="submit">Criar</button>
            </form>
        </div>
    );
};

export default CreateAluno;