import { Server } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import GraphHTTP from 'express-graphql';
import express from 'express';
// import { expressAuth, wsAuth } from './auth_jwt';

// Getting base GraphQL Schema
import schema from './schema';

/** BASE Express server definition **/
const app = express();

// main endpoint for GraphQL Express
app.use('/api/ql', GraphHTTP({
  schema: schema,
  graphiql: true,
}));

// Making plain HTTP server for Websocket usage
const server = Server(app);

/** GraphQL Websocket definition **/
SubscriptionServer.create({
  schema,
  execute,
  subscribe,
}, {
  server: server,
  path: '/api/ws',
}, );


server.listen(4000, () => {
  console.log('Server started here -> http://0.0.0.0:4000');
});
