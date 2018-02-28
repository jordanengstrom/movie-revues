var express = require('express');
var bp = require('body-parser');
var cors = require('cors');
var server = express();
require('./server-assets/db/mlab-config');
var port = 3000;
var moviesRoutes = require('./server-assets/routes/movies');

server.use(bp.json());
server.use(bp.urlencoded({extended: true}));

server.use("/api/*", (req, res, next) => {
    next();
});

server.use(moviesRoutes.router);

server.use('*', (err,req,res,next) =>{
 res.status(400).send(err);
});

server.listen(port, ()=>{
 console.log("Server running on port: ", port);
});