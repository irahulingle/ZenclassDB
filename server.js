const connectDB = require('./db');
const runQueries = require('./queries');

connectDB().then(runQueries);
