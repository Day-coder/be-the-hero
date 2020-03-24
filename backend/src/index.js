const express = require('express'); // importando o modolo express para variavel express - contem todo do express
const cors = require('cors');
const routes = require('./routes'); //importar arquivos de rotas 
const app = express(); // instanciando minha aplicação
app.use(cors());
app.use(express.json()); // Torna o json em algo entendido
app.use(routes);
/* 
Rota e recurso 
* Rota: caminho
* Recurso: associado ao banco 

Metodos HTTP
* GET: Buscar/listar uma informação do back-end
* POST: Criar uma informação do back-end
* PUT: Alterar uma informação do back-end
* DELETE: Deletar uma informação no back-end 

Tipos de parametros
* Query Params: Envia dentro da url. Paramentros nomeados enviados na rotas apos o ? onde pode usar filtros, paginação
* Route Params: Paramentros utilizados para identificar recursos. Identificar um unico recurso
* Request Body: Corpo da requisição, utilizados para criar ou alterar recursos

Bancos de dados
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, entre outros

Configuração do banco de dados que será usado na aplicação
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
*/

app.listen(3333); // aonde vou entrar para visualizar minha aplicação