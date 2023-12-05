const { Router } = require('express');
const { createTransaction } = require('../controllers/transaction');

const router = new Router();

router.post('/', createTransaction);

module.exports = router;