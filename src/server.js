require('dotenv').config();

const { app } = require('./app');

app.listen(process.env.START_PORT, process.env.START_HOST, () => console.log(`Servidor rodnado na porta ${process.env.START_PORT}`));