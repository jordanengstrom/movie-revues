var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var SchemaName = "Movie";
// var ObjectId = mongoose.SchemaTypes.ObjectId


var schema = new Schema({
    title: { type: String, required: true },
    release_date: { type: Date, required: true},
    img: {type: String, required: true},
    rating: {type: Number, required: true}
    // postId: {type: ObjectId, ref: "Post", required: true}
});


module.exports = mongoose.model(SchemaName, schema);