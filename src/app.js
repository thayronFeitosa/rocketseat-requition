const express = require('express');
require('express-async-errors');


const cors = require('cors');
const router = require('./routes');

const { AppError } = require('./shared/errors/AppErros');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

process.env.TZ = "America/Sao_Paulo";


app.use(router);

app.use(

  (err, request, response, _next) => {
    if (err instanceof AppError) {

      return response.status(err.statusCode).json({
        message: err.message
      });
    }

    return response.status(500).json({
      message: `Internal server error - ${err} `,
    });
  }
);

module.exports = { app }
