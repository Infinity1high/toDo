const chai = require('chai');
const expect = chai.expect;
const graphql = require('graphql');

const todo = require('../server/schema/todo_type');

describe('Todo', () => {
  it('Should have and id field of type ID',() => {
    expect(todo.getFields()).to.have.property('id');
    expect(todo.getFields().id.type).to.deep.equals(graphql.GraphQLID)
  })

  it('Should have title field type of string', () => {
    expect(todo.getFields()).to.have.property('title');
    expect(todo.getFields().title.type).to.deep.equals(graphql.GraphQLString)
  })
})
