// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (error, db) => {
    if (error) {
      return console.log('Unable to connect to ModgoDB server');
    }
    console.log('Connected to ModgoDB server');

    // deleteMany
    // db.collection('Todos')
    //   .deleteMany({ text: 'Eat lunch' })
    //   .then(res => {
    //     console.log(res);
    //   });

    // deleteOne
    // db.collection('Todos')
    //   .deleteOne({ text: 'Eat lunch' })
    //   .then(res => {
    //     console.log(res);
    //   });

    // findOneAndDelete
    // db.collection('Todos')
    //   .findOneAndDelete({ completed: false })
    //   .then(res => {
    //     console.log(JSON.stringify(res, undefined, 2));
    //   });

    // db.collection('Users')
    //   .deleteMany({ name: 'Tamer' })
    //   .then(res => {
    //     console.log(JSON.stringify(res.result, undefined, 2));
    //   });

    // db.collection('Users')
    //   .deleteOne({ _id: ObjectID('5bffca5ee179a0370076583c') })
    //   .then(res => {
    //     console.log(JSON.stringify(res.result, undefined, 2));
    //   });

    db.collection('Users')
      .findOneAndDelete({ _id: 123 })
      .then(res => {
        console.log(JSON.stringify(res.value, undefined, 2));
      });

    // db.close();
  }
);
