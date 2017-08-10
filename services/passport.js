const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: `${keys.callbackURL}/auth/google/callback`
			//proxy: true
		},
		/*(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					//do something here
					done(null, existingUser);
				} else {
					new User({ googleId: profile.id })
						.save()
						.then(user => done(null, user));
				}
			});
		}*/
		async (accessToken, refreshToken, profile, done) => {
			//console.log(profile);//user's details
			const existingUser = await User.findOne({ googleId: profile.id });

			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({ googleId: profile.id }).save();
			done(null, user);
		}
	)
);

passport.use(
	new TwitterStrategy(
		{
			consumerKey: keys.twitterConsumerKey,
			consumerSecret: keys.twitterConsumerSecret,
			callbackURL: `${keys.callbackURL}/auth/twitter/callback`
			//proxy: true
		},
		/*(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					//do something here
					done(null, existingUser);
				} else {
					new User({ googleId: profile.id })
						.save()
						.then(user => done(null, user));
				}
			});
		}*/
		async (accessToken, refreshToken, profile, done) => {
			//console.log(profile); //user's details
			const existingUser = await User.findOne({ twitterId: profile.id });

			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({ twitterId: profile.id }).save();
			done(null, user);
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookAppID,
			clientSecret: keys.facebookAppSecret,
			callbackURL: `${keys.callbackURL}/auth/facebook/callback`
			//proxy: true
		},
		/*(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					//do something here
					done(null, existingUser);
				} else {
					new User({ googleId: profile.id })
						.save()
						.then(user => done(null, user));
				}
			});
		}*/
		async (accessToken, refreshToken, profile, done) => {
			//console.log(profile);//user's details
			const existingUser = await User.findOne({ facebookId: profile.id });

			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({ facebookId: profile.id }).save();
			done(null, user);
		}
	)
);
