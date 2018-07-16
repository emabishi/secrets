const app = require('../index');
const request = require('supertest')(app);
const expect = require('chai').expect;

const User = require('../models/users');
const config = require('../config')[process.env.NODE_ENV];

// app.set('env', config.testing.port);

describe('ENDPOINT TESTS >>>> /users/:id', () => {
  let token;
  let user;
  before(done => {

    request
    .post('/login')
    .send({
      username: 'vichugo',
      password: 'victorhugo'
    })
    .end((err, res) => {
      token = res.body.token;
      user = res.body.user;
      done();
    });
  });

  it('should be able to register a user', done => {
    request
      .post('/register')
      .send({
        name: 'Karl Marx',
        email: 'karl.marx@equal.com',
        username: 'marx',
        password: 'secret',
      })
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(201);
        expect(res.body.token).not.to.be.undefined;
        expect(res.body.user.name).to.equal('Karl Marx');
        done();
      });
  });

  it('Should be able to get a user', done => {
    request
      .get(`/users/${user._id}`)
      .set('Authorization', `Bearer: ${token}`)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.user._id.length).to.be.equal(24);
        expect(res.body.user.username).to.be.equal('vichugo');
        done();
      });
  });

  it('Should be able to update a user', done => {
    request
      .put(`/users/${user._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer: ${token}`)
      .send({ name: 'Karl' })
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.user.name).to.be.equal('Karl');
        done();
      });
  });

  it('Should be able to delete a user', done => {
    request
      .delete(`/users/${user._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer: ${token}`)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });

  it('should be able to log in a user', done => {
    request
      .post('/login')
      .send({
        username: 'marx',
        password: 'secret'
      })
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).to.be.equal(202);
        expect(res.body.user.username).to.be.equal('marx');
        done();
      });
  });
});