const app = require('../index');
const request = require('supertest')(app);
const expect = require('chai').expect;
const User = require('../models/users');
const config = require('../config');

// TODO: Configure environment for testing i.e. set env as testing and corresponding ports, think about configuring this in npm start scripts
// i.e. npm start for dev, npm start-test for testing
// TODO: Write scripts to seed database before testing and drop the db after testing. Could be a bash script or use mongoose
// TODO: Implement CI using Circle CI and coverage reporting

app.set('env', config.testing.port);

describe('auth test', () => {
  before(done => {
    User.remove({}, (err) => {
      if (err) done(err);
      done();
    });
  });
  
  // User can register
  describe(' AUTH ENDPOINT TESTS >>>> /register, /login ', () => {
    it('Should be able to register a user', (done) => {
      request
      .post('/register')
      .send({
        name: 'Hera',
        username: 'hera',
        email: 'hera@olympus.com',
        password: 'secret'
      })
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).to.be.equal(201);
        expect(res.body.user._id.length).to.be.equal(24);
        expect(res.body.user.username).to.be.equal('hera');
        expect(res.body.token).to.be.a('string');
        done();
      });
    });

    // User can log in
    it('Should be able to authenticate a registered user', (done) => {
      request
        .post('/login')
        .send({
          username: 'hera',
          password: 'secret'
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res.statusCode).to.be.equal(202);
          expect(res.body.user.username).to.be.equal('hera');
          expect(res.body.token).to.a('string');
          done();
        });
    });
  });
});