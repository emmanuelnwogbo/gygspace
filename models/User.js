const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	facebookId: String,
	twitterId: String,
	displayphoto: String,
	username: String,
	_profile: { type: Schema.Types.ObjectId, ref: "Profile" },
	userToken: String
});

mongoose.model("users", userSchema);
