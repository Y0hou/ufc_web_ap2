var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

//importando os arquivos de rotas
var indexRouter = require('./routes/index');
var alunosRouter = require('./routes/alunos')

const mongoURI = 'mongodb+srv://alunowebdev:alunowebdev@devwev2024-1.nbjxz.mongodb.net/?retryWrites=true&w=majority&appName=devwev2024-1';

mongoose.connect(mongoURI).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
});

var app = express();
app.use(cors({
    origin: 'http://localhost:3000' // Substitua pela URL do seu frontend
  }));
  
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//liberar o acesso
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

//disponibilizando as rotas para o cliente
app.use('/', indexRouter);
app.use('/alunos', alunosRouter)

//BROWSER <=> app.js -> alunos.js -> ProfessorService.js -> ProfessorModel.js

app.listen(6565, () => {
    console.log('Servidor iniciado na porta 6565');
})
