import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlunoService from '../services/AlunoService';
import './ListarPorCurso.css'; // Importando o CSS

const ListarPorCurso = () => {
    const [alunos, setAlunos] = useState([]);
    const [alunosPorCurso, setAlunosPorCurso] = useState({});
    const [destacar, setDestacar] = useState(false);

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const response = await axios.get('http://localhost:6565/alunos');
                setAlunos(response.data);
                agruparPorCurso(response.data);
            } catch (error) {
                console.error('Erro ao listar alunos:', error);
            }
        };
        fetchAlunos();
    }, []);

    const agruparPorCurso = (alunos) => {
        const agrupados = alunos.reduce((acc, aluno) => {
            if (!acc[aluno.curso]) {
                acc[aluno.curso] = [];
            }
            acc[aluno.curso].push(aluno);
            return acc;
        }, {});
        setAlunosPorCurso(agrupados);
    };

    const toggleDestacar = () => {
        setDestacar(!destacar);
    };

    const getRowStyle = (ira) => {
        if (destacar && ira >= 7) {
            return 'destacado'; // Estilo condicional
        }
        return '';
    };

    return (
        <div>
            <h2>Listar Alunos por Curso</h2>
            <button onClick={toggleDestacar}>
                {destacar ? 'Remover Destaque' : 'Destacar Alunos com IRA > 7'}
            </button>
            {Object.keys(alunosPorCurso).map(curso => (
                <div key={curso}>
                    <h3>{curso}</h3>
                    <table className="tabela-alunos">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>IRA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunosPorCurso[curso].map(aluno => (
                                <tr key={aluno.id} className={getRowStyle(aluno.IRA)}>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.IRA}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default ListarPorCurso;
