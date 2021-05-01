const modelSuporte = require('../../models/NpsSuporte')

const { AppError } = require('../../../../shared/errors/AppErros');

class SendNPSforClientUseCase {

    async execute(data) {
        const { solicitacao, telefone, cpf, dateNow } = data;

        const nps = {
            "solicitacao": solicitacao,
            "userCelular": "55" + telefone,
            "cpfAGR": cpf,
            "dateNow": dateNow,
        }
        return await this.__sendSuporte(nps);



    }


    async __sendSuporte(nps) {
        const { userCelular } = nps;
        const findTableSend = await modelSuporte.findNumberInTheTableSent(userCelular);

        if (!findTableSend) return await modelSuporte.sendSurveyToTheClientTableSend(nps)

        const isCustomerService24housAtive = await modelSuporte.have24hoursInSend(userCelular);

        throw new AppError(isCustomerService24housAtive, 403);

    }
}

module.exports = { SendNPSforClientUseCase };
