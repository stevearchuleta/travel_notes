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

// =========================
// Import .env configuration file
// =========================
require('dotenv').config();

// =========================
// Import db.js file
// =========================
const db = require('./db');

// =========================
// Import my all of my database model codes
// This is made possible by the export.modules object in my models index.js file
// =========================
const models = require('./models');

// =========================
// Run my server on a port that is either specified in my .env file or port 4000
// Dynamically sets the port in the Node .env environment or port 4000 when no port is specified
// =========================
const port = process.env.PORT || 4000;

// =========================
// Store DB_HOST value into its own variable
// =========================
const DB_HOST = process.env.DB_HOST;

let notes = [
  {
    id: '1',
    content:
      'Arrived at Cristiano Ronaldo International Airport on Madeira Island; Airport Code: FNC',
    author: 'Mr. & Mrs. Carter'
  },
  { id: '2', content: 'Rented a car', author: 'Fred Miller & Michael Smith' },
  {
    id: '3',
    content: 'Drove around Funchal and then to Prazeres',
    author: 'Alicia and Peter Silva'
  },
  {
    id: '4',
    content: 'Checked into the Jardim Atlantico Hotel',
    author: 'Steve Archuleta & Randy Neely'
  }
];

// =========================
<<<<<<< HEAD
// GRAPHQL SCHEMA using GraphQL schema language
// =========================
const typeDefinitions = gql`
=======
// SCHEMA using GraphQL schema language
// =========================
const typeDefs = gql`
>>>>>>> 6e1322c6fcaecab0dd90e5d127e67962d405e9b2
  type Note {
    id: ID
    content: String
    author: String
  }

  type Query {
    hello: String
<<<<<<< HEAD
    notes: [Note]
    note(id: ID): Note
  }

  type Mutation {
    newNote(content: String): Note
=======
    notes: [Note!]
    note(id: ID!): Note
  }

  type Mutation {
    newNote(content: String!): Note
>>>>>>> 6e1322c6fcaecab0dd90e5d127e67962d405e9b2
  }
`;

// =========================
// Provide RESOLVER functions for my schema files
// =========================
const resolverFunctions = {
  Query: {
    hello: () => 'Hello Travellers!',
<<<<<<< HEAD
    notes: async () => {
      return await models.Note.find();
    },
    note: async (parent, args) => {
      return await models.Note.findById(args.id);
    }
  },
  Mutation: {
    newNote: async (parent, args) => {
      return await models.Note.create({
        content: args.content,
        author: 'Esteban Gilberto de Sousa Archuleta'
      });

      // let noteValue = {
      //   id: String(notes.length + 1),
      //   content: args.content,
      //   author: 'Randy Neely'
      // };
      // notes.push(noteValue);
      // return noteValue;
=======
    notes: () => notes,
    note: (parent, args) => {
      return notes.find(note => note.id === args.id);
    }
  },
  Mutation: {
    newNote: (parent, args) => {
      let noteValue = {
        id: String(notes.length + 1),
        content: args.content,
        author: 'Randy Neely'
      };
      notes.push(noteValue);
      return noteValue;
>>>>>>> 6e1322c6fcaecab0dd90e5d127e67962d405e9b2
    }
  }
};

// =========================
// Create a new instance of an express object and store it in a variable called app
// =========================
const app = express();

// =========================
// Call MongoDB connection
// =========================
db.connect(DB_HOST);
<<<<<<< HEAD
console.log(`🍃  ==> Connected to MongoDB`);
=======
>>>>>>> 6e1322c6fcaecab0dd90e5d127e67962d405e9b2

// =========================
// Apollo Server Setup
// =========================
const server = new ApolloServer({ typeDefinitions, resolverFunctions });

// =========================
// Apply GraphQL Middleware (and set path to /api)
// Therefore, because of the app.listen() method below, when I run this server, the app express() object will be available at http://localhost:4000/api
// =========================
server.applyMiddleware({ app, path: '/api' });

// =========================
// Make my app locally available on port 400 http://localhost:4000
// Template literal syntax (is a template string that allows for a JS embedded expression, such as: ${...})
// =========================
app.listen({ port }, () => {
  console.log(
    `🌎  ==> GraphQL Server (The GraphQL Playground) is now running at http://localhost:${port}${server.graphqlPath}`
  );
});
