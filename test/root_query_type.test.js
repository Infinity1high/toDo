const chai = require('chai');
const expect = chai.expect;
const url = `http://localhost:4000`;
const request = require('supertest')(url);

describe('GraphQL', () => {
  it('Returns all todos in the list', (done) => {
    request.post('/graphql')
      .send({ query: '{ todos { id title } }' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.data.todos).to.be.an('array')
        req
        return done()
      })
  })
});
