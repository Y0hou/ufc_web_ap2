const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true,
    },
    IRA: {
        type: Number,
        required: true
    }
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;