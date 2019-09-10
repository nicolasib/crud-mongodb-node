const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.post('/consulta', UserController.index); //SELECT
routes.post('/register', UserController.store); //INPUT
routes.put('/modifica', UserController.update); //UPDATE
routes.delete('/delete', UserController.delete); //DELETE

module.exports = routes;