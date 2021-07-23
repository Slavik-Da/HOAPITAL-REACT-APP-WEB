const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const Resolvers = require("./resolvers");

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: Resolvers,
  })
);
app.listen(5000, () => console.log("server has been started on port 5000"));
