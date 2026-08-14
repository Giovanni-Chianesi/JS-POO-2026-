const pool = require('./config/db');
const bcrypt = require('bcrypt');

async function semear() {
    try {
        // Limpa a tabelinha antes de executar
        await pool.query('DELETE FROM usuarios');

        // Senha padrão para todos os usuários
        const senhaHash = await bcrypt.hash('123', 10);

        // Insere os tres perfis de teste
        await pool.query(
            'INSERT INTO usuarios (usuario, senha, perfil) VALUES (?, ?, ?), (?, ?, ?), (?, ?, ?)',
            [
                'admin', senhaHash, 'admin',
                'gerente', senhaHash, 'gerente',
                'cliente', senhaHash, 'cliente'
            ]
        );

        console.log('pabins! (Senha: 123)');
        process.exit();
    } catch (error) {
        console.error('Deu erro fi:', error);
        process.exit(1);
    }
}

semear();