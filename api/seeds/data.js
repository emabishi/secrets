const mongoose = require('mongoose');

module.exports = {
  users: [
    {
      _id: mongoose.Types.ObjectId('57c96a56cd9ca231483f082b'),
      firstname: 'Charlotte Bronte',
      username: 'charl',
      email: 'charlote@bronte.com',
      password: 'charlottebronte',
    }, {
      _id: mongoose.Types.ObjectId('57c94278517ca48c9e5af00f'),
      firstname: 'Victor Hugo',
      username: 'vichugo',
      email: 'victor@hugo.com',
      password: 'victorhugo',
    }, {
      _id: mongoose.Types.ObjectId('57c942a8517ca48c9e5af010'),
      firstname: 'Aldous Huxley',
      username: 'al',
      email: 'aldous@huxley.com',
      password: 'aldoushuxley',
    }
  ],
  notes: [
    {
      _id: mongoose.Types.ObjectId('57c975eb2c3d08864b51cd0a'),
      author: mongoose.Types.ObjectId('57c96a56cd9ca231483f082b'),
      title: 'We should all be feminitsts',
      text: 'Being a female superhero',
      createdAt: new Date('2016-09-16T06:51:01.160Z'),
      updatedAt: new Date('2018-09-16T06:51:01.160Z')
    }, {
      _id: mongoose.Types.ObjectId('57c975eb2c3d08864b51cd09'),
      author: mongoose.Types.ObjectId('57c94278517ca48c9e5af00f'),
      title: 'Topology of the Marianas Trench',
      text: 'The Marianas Trench',
      createdAt: new Date('2016-09-16T06:51:01.160Z'),
      updatedAt: new Date('2018-10-16T06:51:01.160Z')
    }, {
      _id: mongoose.Types.ObjectId('57c975eb2c3d08864b51cd07'),
      author: mongoose.Types.ObjectId('57c942a8517ca48c9e5af010'),
      title: 'Life underwater',
      text: 'An ode to life underwater',
      createdAt: new Date('2016-09-16T06:51:01.160Z'),
      updatedAt: new Date('2018-11-16T06:51:01.160Z')
    }, {
      _id: mongoose.Types.ObjectId('57c975eb2c3d08864b51cd08'),
      author: mongoose.Types.ObjectId('57c942a8517ca48c9e5af010'),
      title: 'A Tale of Two Cities',
      text: 'The French Revolution',
      createdAt: new Date('2016-09-16T06:51:01.160Z'),
      updatedAt: new Date('2018-12-16T06:51:01.160Z')
    },
  ]
};