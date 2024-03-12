const express = require ('express');
const router = express.Router();
const homecontroller = require('./src/controllers/homecontroller');
const loginController = require('./src/controllers/loginController');




//create 
router.post('/criaUsuario', homecontroller.criaUsuario);

// read
router.get('/allUsers', homecontroller.todosUsuarios);
router.get('/oneUser/:id', homecontroller.umUsuario);

//update
router.put('/alterarUsuario/:id', homecontroller.editarUsuario);

//delete
router.delete('/deletarUsuario/:id', homecontroller.deletarUsuario );

// rotas do login

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/cadastrar', loginController.adicionarUsuario)

module.exports = router;
