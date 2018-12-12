var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://todos-app-api-user:3tbkEEq3JFpTbQIq@cluster0-shard-00-00-9abmb.mongodb.net:27017,cluster0-shard-00-01-9abmb.mongodb.net:27017,cluster0-shard-00-02-9abmb.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
);

module.exports = { mongoose };
