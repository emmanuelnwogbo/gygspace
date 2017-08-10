const passport = require("passport");

module.exports = app => {
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get(
		"/auth/google/callback",
		passport.authenticate("google"),
		(req, res) => {
			res.redirect("/");
		}
	);

	app.get(
		"/auth/twitter",
		passport.authenticate("twitter", {
			scope: ["profile", "email"]
		})
	);

	app.get(
		"/auth/twitter/callback",
		passport.authenticate("twitter"),
		(req, res) => {
			res.redirect("/");
		}
	);

	app.get(
		"/auth/facebook",
		passport.authenticate("facebook", {
			scope: ["profile", "email"]
		})
	);

	app.get(
		"/auth/facebook/callback",
		passport.authenticate("facebook"),
		(req, res) => {
			res.redirect("/");
		}
	);

	app.get("/api/logout", (req, res) => {
		//passport also adds a couple of other properties to the
		//req object as well that we can use to manipulate the
		//authentication status of the user; one of them is req.logout
		req.user.userToken = null;
		req.user.save();

		req.logout();
		//res.send(req.user);
		res.redirect("/");
	});

	app.get("/api/current_user", (req, res) => {
		//res.send(req.session);
		//console.log(req.session);
		res.send(req.user);
	});
};
