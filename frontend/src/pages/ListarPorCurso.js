import React, { useState, useEffect } from 'react';
import AlunoService from '../services/AlunoService';

const ListarPorCurso = () => {
    const [alunos, setAlunos] = useState([]);
    const [alunosPorCurso, setAlunosPorCurso] = useState({});
    const [destacar, setDestacar] = useState(false);

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const response = await AlunoService.getAll();
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
        if (destacar && ira > 7) {
            return {
                backgroundColor: 'green',
                color: 'white'
            };
        }
        return {};
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
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>IRA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunosPorCurso[curso].map(aluno => (
                                <tr key={aluno.id} style={getRowStyle(aluno.ira)}>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.ira}</td>
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