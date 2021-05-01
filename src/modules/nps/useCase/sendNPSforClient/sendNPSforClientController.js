const { SendNPSforClientUseCase } = require('./sendNPSforClientUseCase');

class SendNPSforClientController {

  async handle(request, response) {
    const { solicitacao, telefone, cpf, dateNow } = request.body
    const data = {
      solicitacao,
      telefone,
      cpf,
      dateNow
    }

    const sendNPSforClientUseCase = new SendNPSforClientUseCase();
    await sendNPSforClientUseCase.execute(data);

  }

}

module.exports = { SendNPSforClientController };
