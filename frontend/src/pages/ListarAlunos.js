import React, { useState, useEffect } from 'react';
import AlunoService from '../services/AlunoService';

const ListarAlunos = () => {
    const [alunos, setAlunos] = useState([]);
    const [mediaIra, setMediaIra] = useState(0);
    const [colorir, setColorir] = useState(false);

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const response = await AlunoService.getAll();
                setAlunos(response.data);
                calcularMediaIra(response.data);
            } catch (error) {
                console.error('Erro ao listar alunos:', error);
            }
        };
        fetchAlunos();
    }, []);

    const calcularMediaIra = (alunos) => {
        if (alunos.length > 0) {
            const somaIra = alunos.reduce((acc, aluno) => acc + aluno.ira, 0);
            const media = somaIra / alunos.length;
            setMediaIra(media);
        }
    };

    const toggleColorir = () => {
        setColorir(!colorir);
    };

    const getRowStyle = (ira) => {
        if (!colorir) return {};
        return {
            backgroundColor: ira < mediaIra ? 'red' : 'blue',
            color: 'white'
        };
    };

    return (
        <div>
            <h2>Listar Alunos</h2>
            <button onClick={toggleColorir}>
                {colorir ? 'Remover Cores' : 'Colorir Linhas'}
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map(aluno => (
                        <tr key={aluno.id} style={getRowStyle(aluno.ira)}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.curso}</td>
                            <td>{aluno.ira}</td>
                        </tr>
                    ))}
                    <tr style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
                        <td colSpan="2">Média dos IRAs</td>
                        <td>{mediaIra.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListarAlunos;