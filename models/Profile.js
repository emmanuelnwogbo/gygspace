const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
	_peopleinvolved: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
	skills: String,
	views: { type: Number, default: 0 },
	remote: Boolean,
	onsite: Boolean,
	displayname: String,
	body: String,
	_owners: [{ type: Schema.Types.ObjectId, ref: "Profile" }]
});

mongoose.model("profiles", profileSchema);
