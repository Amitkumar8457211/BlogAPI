const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const schema = require('./src/schema/index');
const connectDB = require('./src/config/mongoDB');

const app = express();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);
  
app.listen(port, console.log(`Server running on port ${port}`));
