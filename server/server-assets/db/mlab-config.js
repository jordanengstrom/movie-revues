var mongoose = require('mongoose');
// var connectionString = 'mongodb://test:test@ds044907.mlab.com:44907/delete-me';
var connectionString = 'mongodb://test:test@ds012578.mlab.com:12578/movie-revues'
var connection = mongoose.connection;

mongoose.connect(connectionString);

connection.on('error', err => {
 console.log("mlab Error: ", err);
});

connection.once('open', ()=>{
 console.log("mlab connection established!");
});