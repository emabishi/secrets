module.exports = {
  development: {
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost:27017/secrets',
    saltingRounds: 10,
    env: 'development',
    secret: 'secret',

  }
};
