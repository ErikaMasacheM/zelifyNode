const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { getTransactions } = require("../controllers/transaction");

const schema = buildSchema(`
    type Transaction {
        identificador: Int
        status: String
        amount: Float
        account: String
    }
    type Query {
        transactions: [Transaction]
    }
`);

const root = {
    transactions: async() => await getTransactions()
}

const graphqlHttp = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
});

module.exports = graphqlHttp;


