const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");

require("./models/User");
require("./models/Profile");

require("./services/passport");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(morgan("dev"));

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT);
