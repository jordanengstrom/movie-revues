var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var SchemaName = "Movie";
// var ObjectId = mongoose.SchemaTypes.ObjectId


var schema = new Schema({
    title: { type: String, required: true },
    release_date: { type: String, required: true},
    img: {type: String, required: true},
    rating: {type: Number, required: true}
});


module.exports = mongoose.model(SchemaName, schema);