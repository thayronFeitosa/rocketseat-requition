const connection = require("../../../shared/infra/database/index");
const { AppError } = require("../../../shared/errors/AppErros");

class NpsSuporte {

    async findNumberInTheTableSent(telefone) {

        const sql = `SELECT * from nps_suporte_enviados where telefone = ${telefone}`;
        const dataResponse = await connection.promise().query(sql);

        if (dataResponse[0].length === 0) return false;
        return dataResponse[0];

    }



    async sendSurveyToTheClientTableSend(nps) {
        const { solicitacao, userCelular, dateNow, cpfAGR } = nps;
        const sql = `insert into nps_suporte_enviados(solicitacao, telefone, horaEnvioPesquisa, nps_users_iden)  VALUES ( '${solicitacao}','${userCelular}', '${dateNow}','${cpfAGR}' )`;

        const responseDataBase = await connection.promise().query(sql);

        throw new AppError('Pesquisa enviada para o cliente', 200)

    }


    async have24hoursInSend(telefone) {

        const sql = ` SELECT * FROM nps_suporte_enviados
    WHERE telefone=${telefone}`

        const responseDataBase = await connection.promise().query(sql);
        if (responseDataBase[0].length === 0 || responseDataBase[0] === undefined) return false;
        var { horaEnvioPesquisa } = responseDataBase[0][0];

        console.log(horaEnvioPesquisa);


        // var date = new Date(horaEnvioPesquisa);
        // horaEnvioPesquisa = new Date(date.valueOf() - date.getTimezoneOffset() * (60000));
        // const nDate = new Date().toLocaleString('pt-br', {
        //     timeZone: 'America/Sao_Paulo'
        // });

        // console.log(horaEnvioPesquisa);

        return horaEnvioPesquisa;

    }

}

module.exports = new NpsSuporte();
