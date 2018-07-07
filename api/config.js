module.exports = {
  development: {
    port: process.env.PORT || 4000,
    db: 'mongodb://localhost:27017/secrets',
    saltingRounds: 10,
    env: 'development',
    secret: 'secret',
  },
  testing: {
    port: process.env.PORT || 4001,
    db: 'mongodb://localhost:27017/secrets-testing',
    saltingRounds: 10,
    env: 'test',
    secret: 'secret',
  }
};
