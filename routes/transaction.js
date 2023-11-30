const { Router } = require('express');
const { createTransaction } = require('../controllers/transaction');

const router = new Router();

router.get('/', createTransaction);

module.exports = router;