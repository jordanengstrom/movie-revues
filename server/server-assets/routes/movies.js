var router = require("express").Router();
var Movies = require("../models/movie");

//ADD MOVIE
router.post("/api/my-movies", (req, res, next) => {
    Movies.create(req.body)
        .then(movie => {
            res.send(movie)
        })
        .catch(next)
});

//DELETE MOVIE FROM LIST
router.delete("/api/my-movies/:movieid/", (req, res, next) => {
    Movies.findByIdAndRemove(req.params.movieid)
        .then(movie => {
            res.send({message: "Successfully deleted movie"})
        })
        .catch(next)
});

module.exports = { router };
