const app = require('../index');
const request = require('supertest')(app);
const expect = require('chai').expect;

const User = require('../models/notes');
const config = require('../config');

app.set('env', config.testing.port);

describe('ENDPOINT TESTS >>>> /notes, /notes/:id', () => {
  let token;
  before(done => {
    // login a user
    request
      .post('/register')
      .send({
        name: 'Hera',
        username: 'hera',
        email: 'hera@olympus.com',
        password: 'secret'
      });

    request
      .post('/login')
      .send({
        username: 'hera',
        password: 'secret'
      })
      .end((err, res) => {
        token = res.body.token;
        done();
      });      
  });

  // it('Should be able to create a note', (done) => {
  //   request
  //   .post('/notes')
  //   .set('Accept', 'application/json')
  //   .set('Authorization', `Bearer: ${token}`)
  //   .send({ title: 'Queens', text: 'Queens' })
  //   .end((err, res) => {
  //     if (err) {
  //       done(err);
  //     } else {
  //       expect(res.statusCode).to.be.equal(201);
  //       expect(res.body.note.title).to.be.equal('Queens');
  //       done();
  //     }
  //   });
  // });

  it('Should be able to update a note', (done) => {
    request
      .put('/notes/5b22314089b48f566a62f78e')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer: ${token}`)
      .send({
        title: 'Queening'
      })
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).to.be.equal(200);
        // expect(res.body.user.name).to.be.equal('HeraHera');
        done();
      });
  });

  // it('Should be able to delete a user', (done) => {
  //   User.findOne({
  //     username: 'hera'
  //   }, (err, user) => {
  //     if (err) {
  //       done(err);
  //     } else {
  //       request
  //         .delete(`/notes/${user._id}`)
  //         .set('Accept', 'application/json')
  //         .set('Authorization', `Bearer: ${token}`)
  //         .end((err, res) => {
  //           if (err) done(err);
  //           expect(res.statusCode).to.be.equal(200);
  //           done();
  //         });
  //     }
  //   });
  // });
});