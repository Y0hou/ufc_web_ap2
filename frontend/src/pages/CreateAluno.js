// src/pages/CreateAluno.js
import React, { useState } from 'react';
import AlunoService from '../services/AlunoService';

const CreateAluno = () => {
    const [nome, setNome] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await AlunoService.create({ nome });
            alert('Aluno criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar aluno:', error);
        }
    };

    return (
        <div>
            <h2>Criar Aluno</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome do Aluno"
                    required
                />
                <button type="submit">Criar</button>
            </form>
        </div>
    );
};

export default CreateAluno;
