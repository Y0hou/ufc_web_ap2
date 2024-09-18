// src/pages/RemoveAluno.js
import React, { useState } from 'react';
import AlunoService from '../services/AlunoService';

const RemoveAluno = () => {
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await AlunoService.delete(id);
            alert('Aluno removido com sucesso!');
        } catch (error) {
            console.error('Erro ao remover aluno:', error);
        }
    };

    return (
        <div>
            <h2>Remover Aluno</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="ID do Aluno"
                    required
                />
                <button type="submit">Remover</button>
            </form>
        </div>
    );
};

export default RemoveAluno;
