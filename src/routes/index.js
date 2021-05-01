const { Router } = require('express');

const npsController = require('./npsController.routes');

const routes = Router();

routes.use('/pesquisa', npsController);

module.exports = routes;
