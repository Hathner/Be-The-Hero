const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors(
    // origin: 'http://meuapp.com'
));
app.use(express.json());
app.use(routes)
/*
    Rota: O 'caminho completo' do servidor
    ex: localhost:3333/users

    Recurso: O que vem depois da '/'
    ex: /users
*/

/*
    Métodos HTTP (jeitos de acessar o recurso)

    GET: Buscar/Listar uma informação do back-end
    POST: Criar uma informação do back-end
    PUT: Alturar uma informação do back-end
    DELETE: Deletar uma informação do back-end
*/

/* 
    Parâmetros

    Query: nomeados enviados na rota após '?' (Filtros, Paginação)
    ex: 
    Insomnia: /users?page=2&name=joão&idade=15
    VS Code:    app.get('/users')
                const params = request.query;
                console.log(params);

    Route: utilizados para identificar recursos
    ex: 
    Insomnia: /users/1
    VS Code:    app.get('/users/:id')
                const id = request.params;
                console.log(id);

    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
    ex:
    Insomnia: /users
        JSON
        {
	        "name": "Juan Alejandro",
	        "idade": 16
        }
    VS Code:    app.get('/users')
                const params = request.body;
                console.log (params)
*/

/* 
        Tipos de DB's
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc

        Como usar o SQLite
    Driver: select * from users
    No Driver você instala o pacote oficial do DB no Node

    Query Builder: table('users').select('*').where()
    Você programa o banco com o próprio JS, a vantagem é que ele serve para
    qualquer banco acima, sem a necessidade da instalação de um específico.
*/

app.listen(3333);