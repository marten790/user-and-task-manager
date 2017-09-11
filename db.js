// // db.js
// var mongoose = require('mongoose');
// // mongoose.Promise = global.Promise;
//
// const url = 'mongodb://marten790:Password123@cluster0-shard-00-00-fe0ib.mongodb.net:27017,cluster0-shard-00-01-fe0ib.mongodb.net:27017,cluster0-shard-00-02-fe0ib.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
//
// mongoose.connect(url, function(err, db) {
//     if (err) {
//         console.log('Unable to connect to the server. Please start the server. Error:', err);
//     } else {
//         console.log('Connected to Server successfully!');
//     }
// });
mongoose = require('mongoose'),
 url = 'mongodb://marten790:Password123@cluster0-shard-00-00-fe0ib.mongodb.net:27017,cluster0-shard-00-01-fe0ib.mongodb.net:27017,cluster0-shard-00-02-fe0ib.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(url);
