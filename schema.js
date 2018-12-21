import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export default new GraphQLSchema ({
  query: new GraphQLObjectType ({
    name: 'Query',
    fields: {
      message: {
        type: GraphQLString,
        resolve() { return 'Hello Websocket in GraphQL!!!'; }
      }
    }
  })
});