const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const conexao = require('./src/models/database');
const router = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');





app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(router);
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(process.env.PORT, () => {
    console.log('servidor rodando na porta 3000');
})