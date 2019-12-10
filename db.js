// db.js
var mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://testdb:xMgvcI9qvIlbsMPd@cluster0-fe0ib.mongodb.net/test?retryWrites=true&w=majority';


mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> console.log('Database Connection Successful!!'))
.catch(err => console.error(err));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));