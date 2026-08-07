// ============================================================
// controllers/ItemController.js — CONTROLLER
//
// O Controller agora é async porque precisa aguardar
// a resposta do banco antes de responder ao cliente.
//
// try/catch substitui o if(erro) dos callbacks:
//   try   → tudo correu bem, responde com os dados
//   catch → algo deu errado (banco fora, query errada...),
//           responde com erro 500
//
// O Controller NÃO sabe como a query é feita — isso é do Model.
// O Controller NÃO sabe como o HTML é montado — isso é da View.
// ============================================================
  // 5º Digitar o código (Feito pelo Professor - AQUI)

    const Item = require('../models/Item');
    class ItemController {
    static async listar(req,res){
        try {
            const termo = req.query.busca || '';

            const itens = termo
                ? await Item.buscarPorNome(termo)
                : await Item.buscarTodos(); 
                return res.json(itens);
            
            } catch (erro) {
                console.error('Erro de buscar itens', erro);
                res.status(500).json({ erro: 'Erro interno do servidor' });
            }
        }
    }

module.exports = ItemController;
  // 6º Digitar o código (Feito pelo Professor - AQUI)



      // await pausa aqui até o banco responder



    // 7º Digitar o código (Feito pelo Professor - AQUI)



      // Qualquer erro do banco cai aqui



      // Em produção: logar o erro, não expor detalhes ao cliente


      
      // 8º Digitar o código (Feito pelo Professor - AQUI)