const express = require('express');
const sequelize = require('../database/connection');
const graphqlHttp = require('../database/graphql');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3002;
        this.trasaccionPath = '/v1/transaction';
        this.graphqlPath = '/graphql';
        this.connectionDB();
        this.initMiddleware();
        this.routes();
    }

    async connectionDB(){
        await sequelize.authenticate().then(() => {
            console.log('Conexion correcta.');
        }).catch((error) => {
            console.error('No se puede conectar la base: ', error);
        });
        console.log('database online', {});
        sequelize.sync({ force: false })
            .then(() => {
                console.log('Base de datos y tablas sincronizadas');
            })
            .catch(error => {
                console.error('Error al sincronizar la base de datos:', error);
            });

    }
    initMiddleware() {
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.trasaccionPath,require('../routes/transaction'));
        this.app.use(this.graphqlPath, require('../database/graphql'));
    }
    listen() {
        this.app.listen(this.port, () => console.log(`Server corriendo en ${this.port}`));
    }

}

module.exports = Server;