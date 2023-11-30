const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.POSTGRESQL_DATABASE,
    process.env.POSTGRESQL_USER,
    process.env.POSTGRESQL_PASSW,
    {
        host: process.env.POSTGRESQL_HOST,
        port: process.env.POSTGRESQL_PORT,
        dialect: 'postgres',
        logging: false // quita los logs de sequelize
    });


module.exports = sequelize;