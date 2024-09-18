// src/services/AlunoService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/alunos'; // Ajuste o URL conforme necessário

const AlunoService = {
    create: (aluno) => axios.post(API_URL, aluno),
    update: (id, aluno) => axios.put(`${API_URL}/${id}`, aluno),
    delete: (id) => axios.delete(`${API_URL}/${id}`),
    getAll: () => axios.get(API_URL),
};

export default AlunoService;
