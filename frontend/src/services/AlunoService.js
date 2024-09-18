import axios from 'axios';

const API_URL = 'http://localhost:6565/alunos';

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
    getAll: async () => {
        try {
            const response = await axios.get("http://localhost:6565");
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