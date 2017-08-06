const mongoose = require("mongoose");
const { Schema } = mongoose;

const gygSchema = new Schema({
	title: String,
	body: String,
	_owner: { type: Schema.Types.ObjectId, ref: "User" },
	views: { type: Number, default: 0 },
	dateCreated: Date
});

mongoose.model("gygs", gygSchema);
