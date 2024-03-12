const mysql = require('mysql2/promise');

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

const conexao = mysql.createPool(config);

const criaTabela = async () => {
    try {
        const conn = await conexao.getConnection();
        await conn.query(`create table if not exists pessoa(
            id int auto_increment primary key,
            nome_completo varchar(100),
            altura float,
            peso float, 
            idade int, 
            profissao varchar(50)
        );
        `)
        console.log('tabela pessoa criada com sucesso');
        
    } catch (error) {
        throw new error('erro ao criar a tabela', error);

    }
}

const criaTabelaLogin = async  () => {

    try {
        const conn = await conexao.getConnection();
        await conn.query(`create table if not exists cadastro(
        id int auto_increment primary key unique,
        email varchar (50) not null,
        senha varchar (20) not null
        );
        `);
        console.log('tabela cadastro criada com sucesso');
        
    } catch (error) {
        console.error('erro ao criar a tabela', error)
    }
}


criaTabela();
criaTabelaLogin()

module.exports = conexao;