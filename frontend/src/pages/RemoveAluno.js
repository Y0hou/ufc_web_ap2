import React, { useState } from 'react';
import AlunoService from '../services/AlunoService';

const RemoveAluno = () => {
    const [nome, setNome] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await AlunoService.deleteByName(nome);
            alert('Aluno removido com sucesso!');
        } catch (error) {
            console.error('Erro ao remover aluno:', error);
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
            <h2>Remover Aluno</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nome}
                    onChange={handleNomeChange}
                    placeholder="Nome do Aluno"
                    aria-label="Nome do Aluno"
                    required
                />
                <button type="submit">Remover</button>
            </form>
        </div>
    );
};

export default RemoveAluno;