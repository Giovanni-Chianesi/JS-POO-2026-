const express = require('express');
const ItemController = require('../controllers/ItemController');

const router = express.Router();

router.get('/itens', ItemController.listar);

module.exports = router;