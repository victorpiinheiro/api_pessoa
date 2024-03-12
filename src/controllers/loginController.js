const loginModel = require('../models/loginModel');

exports.adicionarUsuario = async (req, res) => {

    const email = req.body.email;
    const password = req.body.senha;
    if (await loginModel.valida(email)) {
        res.status(404).json('usuario ja cadastrado');
    } else {
        const criaUsuario = await loginModel.create(email, password);
        res.status(201).json({messagem: 'o usuario foi cadastrado com sucesso'});
    }

}