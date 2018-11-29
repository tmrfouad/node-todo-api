// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (error, db) => {
    if (error) {
      return console.log('Unable to connect to ModgoDB server');
    }
    console.log('Connected to ModgoDB server');

    // db.collection('Todos')
    //   .find({ _id: ObjectID('5bffcf5ccb4e8ad1f22cab61') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos:');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos Count:${count}`);
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    db.collection('Users')
      .find({ name: 'Tamer' })
      .toArray()
      .then(users => {
        console.log('Users:');
        console.log(JSON.stringify(users, undefined, 2));
      });

    db.close();
  }
);
