const conexao = require('./database');
// CREATE

const create = async (body) => {
    try {
        const { nome_completo, altura, peso, idade, profissao} = body;
        const sql = await conexao.query(`INSERT INTO pessoa (nome_completo, altura, peso, idade, profissao)
        VALUES (?, ?, ?, ?, ?)`, [nome_completo, altura, peso, idade, profissao]);
        return sql;
    } catch (error) {
        throw error;
    }
}

// READ
const allRead = async() => {
    try {
        const sql = await conexao.query('select * from pessoa;');
        return sql[0];  
    } catch (error) {
        throw error;
    }
}

const oneRead = async (id) => {
    try {
        const sql = await conexao.query ('select * from pessoa where id=?', [id]);
        return sql[0];
    } catch (error) {
        throw error
    }
}
// UPDATE
const update = async (id, body) => {
   const {nome_completo, altura, peso, idade, profissao} = body;
   const updates = [];
   const valores = [];

   if (nome_completo !== undefined) {
    updates.push('nome_completo=?');
    valores.push(nome_completo);
   }

   if (altura !== undefined) {
    updates.push('altura=?');
    valores.push(altura);
   }

   if (peso !== undefined) {
    updates.push('peso=?');
    valores.push(peso);
   }

   if (idade !== undefined) {
    updates.push('idade=?');
    valores.push(idade);
   }

   if (profissao !== undefined) {
    updates.push('profissao=?');
    valores.push(profissao);
   }

   if (updates.length === 0) {
    console.log('nao há campo para editar')
   }

   const sql = await conexao.execute(`update pessoa set ${updates.join(', ')} where id=?`, [...valores, id]);
   return sql;
}
// DELETE

const deletar = async (id) => {
    try {
        const sql = await conexao.query('delete from pessoa where id=?', [id]);
        return sql; 
    } catch (error) {
        throw error;
    }
        
    }

module.exports = {
    create,
    allRead,
    oneRead, 
    update,
    deletar
}


