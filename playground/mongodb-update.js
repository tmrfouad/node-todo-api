// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (error, db) => {
    if (error) {
      return console.log('Unable to connect to ModgoDB server');
    }
    console.log('Connected to ModgoDB server');

    // findOneAndUpdate
    // db.collection('Todos')
    //   .findOneAndUpdate(
    //     { _id: ObjectID('5bffdae1cb4e8ad1f22cad50') },
    //     { $set: { completed: true } },
    //     { returnOriginal: false }
    //   )
    //   .then(res => {
    //     console.log(res);
    //   });

    db.collection('Users')
      .findOneAndUpdate(
        { _id: ObjectID('5bfff0340ee6d081eb0f84a9') },
        {
          $set: { name: 'Tamer' },
          $inc: { age: 1 }
        },
        { returnOriginal: false }
      )
      .then(res => {
        console.log(res);
      });

    // db.close();
  }
);
