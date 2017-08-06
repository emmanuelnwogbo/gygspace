const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
	_user: { type: Schema.Types.ObjectId, ref: "User" },
	skills: String,
	views: { type: Number, default: 0 },
	remote: Boolean,
	onsite: Boolean
});

mongoose.model("profiles", profileSchema);
