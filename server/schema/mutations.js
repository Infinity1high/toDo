const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const ToDo = mongoose.model('todo');
const TodoType = require('./todo_type');


const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: {
      type: TodoType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new ToDo({ title })).save()
      }
    },
    deleteTodo: {
      type: TodoType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        // if(id instanceof Object ) {
        //   return ToDo.deleteMany({ _id: { $in: id}})
        // }
        return ToDo.remove({ _id: id });
      }
    },
  }
});

module.exports = mutation;
