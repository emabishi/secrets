const app = require('../index');
const request = require('supertest')(app);
const expect = require('chai').expect;

const User = require('../models/users');
const config = require('../config');

app.set('env', config.testing.port);

// describe('user tests', () => {
//   let token;
//   before(done => {
//     // login a user
//     request
//     .post('/register')
//     .send({
//       name: 'Hera',
//       username: 'hera',
//       email: 'hera@olympus.com',
//       password: 'secret'
//     });
//     done();

//     request
//     .post('/login')
//     .send({
//       username: 'hera',
//       password: 'secret'
//     })
//     .end((err, res) => {
//       token = res.body.token;
//       done();
//     });
//   });

//   // User can register
//   describe(' ENDPOINT TESTS >>>> /users/:id ', () => {
//     it('Should be able to get a user', (done) => {
//       // TODO: Get id of user with username hera
//       const userId  = 'xyz';
//       request
//         .get(`/user/${userId}`)
//         .set('Accept', 'application/json')
//         .set('Authorization', token )
//         .end((err, res) => {
//           if (err) done(err);
//           expect(res.statusCode).to.be.equal(201);
//           expect(res.body.user._id.length).to.be.equal(24);
//           expect(res.body.user.username).to.be.equal('hera');
//           done();
//         });
//     });

//     // User can log in
//     it('Should be able to update a user', (done) => {
//       done();
//     });
//   });
// });