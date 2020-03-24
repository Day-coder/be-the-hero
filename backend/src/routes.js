const express = require('express'); //Importanto do express
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const routes = express.Router(); //Desacoplacão de rotas
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); // recebe 2 parametros

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

