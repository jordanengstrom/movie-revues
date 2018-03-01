var router = require("express").Router();
var Movies = require("../models/movie");

//GET MY-MOVIES 
router.get("/api/my-movies", (req, res, next) => {
    Movies.find(req.query)
        .then(movies => {
            return res.send(movies);
        })
        .catch(next)
})

//ADD MOVIE
router.post("/api/my-movies", (req, res, next) => {
    Movies.create(req.body)
        .then(movie => {
            res.send(movie)
        })
        .catch(next)
});

//DELETE MOVIE FROM LIST
router.delete("/api/my-movies/:movieid", (req, res, next) => {
    Movies.findByIdAndRemove(req.params.movieid)
        .then(movie => {
            res.send({ message: "Successfully deleted movie" })
        })
        .catch(next)
});

module.exports = { router };
