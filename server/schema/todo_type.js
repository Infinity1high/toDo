const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID  } = graphql;

const TodoType = new GraphQLObjectType({
  name:  'TodoType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
  })
});

module.exports = TodoType;
