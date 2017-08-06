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
			res.send("done");
		}
	);

	app.get("/api/logout", (req, res) => {
		//passport also adds a couple of other properties to the
		//req object as well that we can use to manipulate the
		//authentication status of the user; one of them is req.logout
		req.logout();
		//res.send(req.user);
		res.redirect("/");
	});

	app.get("/api/current_user", (req, res) => {
		//res.send(req.session);
		res.send(req.user);
	});
};
