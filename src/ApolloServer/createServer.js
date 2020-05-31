const { ApolloServer } = require("apollo-server");
const Query = require("./resolvers/Query");
const typeDefs = require("./typeDefs");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  },
});

module.exports = server;
