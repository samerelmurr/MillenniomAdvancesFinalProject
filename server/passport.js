const GoogleStrategy = require('passport-google-oauth20').Strategy;


const GOOGLE_CLIENT_ID = "359401617577-atkg5ojkd1sq15c4ab6keqd6plmb422t.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));