const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const TodoType = require('./todo_type');
const ToDo = mongoose.model('todo');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    todos: {
      type: new GraphQLList(TodoType),
      resolve() {
        return ToDo.find({});
      }
    },
    todo: {
      type: TodoType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return ToDo.findById(id);
      }
    },
    // lyric: {
    //   type: LyricType,
    //   args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    //   resolve(parnetValue, { id }) {
    //     return Lyric.findById(id);
    //   }
    // }
  })
});

module.exports = RootQuery;
