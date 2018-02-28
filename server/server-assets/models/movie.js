var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var SchemaName = "Movie";
// var ObjectId = mongoose.SchemaTypes.ObjectId


var schema = new Schema({
    title: { type: Object, required: true },
    release_date: { type: Date, required: true, default: Date.now() },
    img: {type: Image, required: true},
    rating: {type: Number, required: true}
    // postId: {type: ObjectId, ref: "Post", required: true}
});


module.exports = mongoose.model(SchemaName, schema);