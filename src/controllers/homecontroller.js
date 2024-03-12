const homeModel = require('../models/homemodel');


exports.criaUsuario = async (req, res ) => {
    try {
        const body = req.body;
         await homeModel.create(body);
        res.status(201).json({message: 'Usuario criado com sucesso'})
        
    } catch (error) {
        console.error('Erro ao cadastrar o usuário:', error);
        res.status(500).json({message: 'ERRO AO CADASTRAR O USUARIO'});
    }
}

exports.todosUsuarios = async (req, res) => {
    try {
        const todosUsuarios = await homeModel.allRead();
            res.status(201).json(todosUsuarios);
    } catch (error) {
        console.error('Erro ao buscar todos os usuários:', error);
        res.status(500).json({ message: 'Erro ao buscar todos os usuários' });
    }
}

exports.umUsuario = async (req, res) => {
    try {
        const usuarioId = req.params.id;
        const exibeUmUsuario = await homeModel.oneRead(usuarioId);
            res.status(200).json(exibeUmUsuario);
       
    } catch (error) {
        console.error('Erro ao buscar um usuário:', error);
        res.status(500).json({ message: 'Erro ao buscar um usuário' });
    }

}

exports.editarUsuario = async (req, res) => {
    try {
        const clienteId = req.params.id;
        const valores = req.body;
        await homeModel.update(clienteId, valores);
        res.status(200).json({ message: `O Usuário ${valores.nome_completo} foi editado com sucesso` });
    } catch (error) {
        console.error('Erro ao editar o usuário:', error);
        res.status(500).json({ message: 'Erro ao editar o usuário' });
    }
}

exports.deletarUsuario = async (req, res) => {
    try {
        const usuarioId = req.params.id;
        const deletar = await homeModel.deletar(usuarioId);
        res.status(201).json({message: 'usuario excluido com sucesso'});
    } catch (error) {
        res.status(501).json({message: 'erro ao excluir o usuario', error})
        
    }
}