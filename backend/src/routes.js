const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//LOGIN
//-----------------------------------------------------
routes.post('/sessions', SessionController.create)

//ONGS
//-----------------------------------------------------
routes.get('/ongs', OngController.index);       // LISTA
routes.post('/ongs', OngController.create);     // CADASTRA
routes.get('/profile', ProfileController.index) // LISTA ID ESPECÍFICO

//CADASTRO DE INCIDENTES
//-----------------------------------------------------
routes.get('/incidents', IncidentController.index);     // LISTA
routes.post('/incidents', IncidentController.create);   //CADASTRA
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;