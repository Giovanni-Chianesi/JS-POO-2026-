    function verificarAutenticacao(req, res, next) {
        if (!req.session.usuario) {
            return res.status(401).json({
                erro: 'Usuario não autenticado'
            });
        }

        next();
    }
    module.exports = verificarAutenticacao;