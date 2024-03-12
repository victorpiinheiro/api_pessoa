const conexao = require('./database');

const valida = async (email) => {
    const pegaEmail = await conexao.query('select email from cadastro where email=?', [email]);
    
    if (pegaEmail.length > 0) {
        return true;
    }
}


const create = async (email, senha) => {
    try {
        
        const sql = await conexao.query('insert into cadastro(email, senha) values (?,?)', [email, senha]);
        return sql;
    } catch (error) {
        console.error('erro ao cadastrar usuario', error);
    }
}

module.exports = {
    valida,
    create
}