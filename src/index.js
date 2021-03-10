// =========================
// index.js
// This is the main entry point of my notedly application
// =========================

// =========================
// Express.js Framework
// To build a server-side web app that will serve as the basis for the backend of my API.
// Express is a back end runtime library that extends node.js,
// Which can be used as the API-provider-sender-app that retrieves request data from the database
// and returns the data to the API consumer.
// =========================

// =========================
// Pass express dependency into the Node.js require method
// =========================
const express = require('express'); // require the express dependency
// =========================
// Pass apollo-server-express dependency to the Node.js require method; allows me to serve data as a GraphQL API
// =========================
const { ApolloServer, gql } = require('apollo-server-express');
const port = process.env.PORT || 4000;

// app.get('/', (req, res) => {
//   res.send('Hello Madeira Traveller!!!');
// });

// app.listen(
//   port,
//   console.log(`🌎 Server is running at http://localhost:${port}!`)
// );

// =========================
// Construct a schema using GraphQL schema language
// =========================
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// =========================
// Provide resolver functions for my schema files
// =========================
const resolvers = {
  Query: {
    hello: () => 'Hello Travellers!'
  }
};

// =========================
// Create a new instance of an express object and store it in a variable called app
// =========================
const app = express();

// =========================
// Apollo Server Setup
// =========================
const server = new ApolloServer({ typeDefs, resolvers });

// =========================
// Apply GraphQL Middleware (...and set path to /api)
// Therefore, because of the app.listen() method below, when I run this server, the app express() object will be available at http://localhost:4000/api
// =========================
server.applyMiddleware({ app, path: '/api' });

// =========================
// Make my app locally available on port 400 http://localhost:4000
// Template leteral syntax (is a template string that allows for a JS embedded exression, such as: ${...})
// =========================
app.listen({ port }, () => {
  console.log(
    `🌎  ==> GraphQL Server (The GraphQL Playground) is now running at http://localhost:${port}${server.graphqlPath}`
  );
});
