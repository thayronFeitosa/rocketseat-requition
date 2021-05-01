const { Router } = require('express');

const { SendNPSforClientController } = require('../modules/nps/useCase/sendNPSforClient/sendNPSforClientController');

const sendNPSforClientController = new SendNPSforClientController();

const npsController = Router();

npsController.post('/nps/agr/insert',sendNPSforClientController.handle)

module.exports = npsController;
