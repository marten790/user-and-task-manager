// // db.js
mongoose = require('mongoose'),
 url = 'mongodb://marten790:Password123@cluster0-shard-00-00-fe0ib.mongodb.net:27017,cluster0-shard-00-01-fe0ib.mongodb.net:27017,cluster0-shard-00-02-fe0ib.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

mongoose.Promise = global.Promise;
mongoose.connect(url);
