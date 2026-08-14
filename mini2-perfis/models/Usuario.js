const pool = require('.config/db');
const bcrypt = require('bcrypt');

class Usuario {
    static async buscarPorUsuario(usuario) {
        const [rows] = await pool.query(
            'SELECT * FROM usuarios WHERE usuario = ?',
            [usuario]
        );

        return rows[0];
    }

    static async validarSenha(senha, hash) {
        return await bcrypt.compare(senha, hash);
    }
}

module.exports = Usuario;