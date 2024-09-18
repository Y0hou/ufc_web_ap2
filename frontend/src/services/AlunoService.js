import axios from 'axios';

const API_URL = 'http://localhost:5000/api/alunos'; // Ajuste o URL conforme necessário

const AlunoService = {
    create: async (aluno) => {
        try {
            const response = await axios.post(API_URL, aluno);
            return response.data;
        } catch (error) {
            console.error('Erro ao criar aluno:', error);
            throw error;
        }
    },
    update: async (id, aluno) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, aluno);
            return response.data;
        } catch (error) {
            console.error('Erro ao atualizar aluno:', error);
            throw error;
        }
    },
    delete: async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao remover aluno:', error);
            throw error;
        }
    },
    deleteByName: async (nome) => {
        try {
            const response = await axios.delete(`${API_URL}/nome/${nome}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao remover aluno pelo nome:', error);
            throw error;
        }
    },
    getAll: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error('Erro ao listar alunos:', error);
            throw error;
        }
    },
    getById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar aluno:', error);
            throw error;
        }
    }
};

export default AlunoService;