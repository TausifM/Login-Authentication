const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GOOGLE_CLIENT_ID = "process.env.GOOGLE_CLIENT_ID";
const GOOGLE_CLIENT_SECRET = "process.env.GOOGLE_CLIENT_SECRET";
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      //   const user = {
      //       username: profile.displayName,
      //         googleId: profile.id,
      //         avatar: profile.photos[0].value,
      //         email: profile.emails[0].value,
      //};
      //user.save();  when we using mongodb we can use this
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
