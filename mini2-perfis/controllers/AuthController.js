const Usuario = require('../models/Usuario');

class AuthController {
    static async login(req, res) {
        try {
            const { usuario, senha } = req.body;

            const usuarioEncontrado = await Usuario.buscarPorUsuario(usuario);

            if (!usuarioEncontrado) {
                return res.status(401).json({ erro: 'Usuário erado'});
            }

            const senhaValida = 
        }
    }
}