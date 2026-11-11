const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//CONEXÃO COM O BANCO DE DADOS 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aula_db'
})

db.connect( err => {
    if( err ) console.log('Erro ao conectar no MySQL: ', err );
    else console.log('Conectado com Sucesso!')
})

//ROTA PARA SALVAR OS DADOS RECEBIDOS DO APP
app.post('/salvar', (req, res) => {
    const { campo1, campo2 } = req.body;
    const query = 'INSERT INTO mensagens (campo1, campo2) VALUES (?,?)';
    
    db.query(query, [campo1, campo2], (err, result) => {
        if(err) {
            return res.status(500).json({erro: 'Erro ao salvar no banco.'})
        }
        res.status(200).json({mensagem: 'Dados salvos com sucesso!'})
    })
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

//INSTALAR OS SEGUINTES COMANDOS NODE PARA CONFIGURAÇÃO E
//COMUNICAÇÃO COM O MYSQL:

//npm install express

//npm install mysql2

//npm install mysql2 cors

//npm install cors