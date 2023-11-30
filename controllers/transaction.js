const { Request, Response } = require("express");
const Transaction = require('../models/transaction');
const createTransaction = async (req = Request, res = Response) => {
    const {identificador , status, account, amount } = req.body;

    try {
        const transaction = new Transaction({identificador, status, account, amount });

        await transaction.save();
        return res.status(201).json({errorCode: 0, msg: "Transaccion creada", transaction});
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorCode: 1, msg: 'Comuniquese con el administrador'});
    }
}

module.exports = {
    createTransaction: createTransaction
}