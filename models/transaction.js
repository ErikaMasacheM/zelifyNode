const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../database/connection');

const Transaction = sequelize.define('transaction', {
    identificador: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM,
        values: ['REJECTED', 'APPROVED'],
        allowNull: false
    },
    account: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
}, {
    timestamps: true, // Activa la gestión automática de createdAt y updatedAt
});

// User.hasOne(Order, {
//     onDelete: 'RESTRICT',
//     onUpdate: 'RESTRICT'
// });

module.exports = Transaction;
