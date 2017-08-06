const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
	title: String,
	body: String,
	_owners: [{ type: Schema.Types.ObjectId, ref: "User" }],
	views: { type: Number, default: 0 },
	dateCreated: Date
});

mongoose.model("projects", projectSchema);
