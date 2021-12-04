const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const GOOGLE_CLIENT_ID = "process.env.GOOGLE_CLIENT_ID";
const GOOGLE_CLIENT_SECRET = "process.env.GOOGLE_CLIENT_SECRET";
const GITHUB_CLIENT_ID = "627e40005d456df458d7";
const GITHUB_CLIENT_SECRET = "fff8f372ab905e013a5f9d31b415320208c39ce8";
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
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
passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
