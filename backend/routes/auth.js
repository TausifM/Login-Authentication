const express = require("express");
const passport = require("passport");
const CLIENT_HOME_URL = "http://localhost:3000";
const app = express();
app.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Login Successful",
      user: req.user,
    });
  }
});
app.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Login failed",
  });
});
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_URL);
});
app.get("/google", passport.authenticate("google", { scope: ["profile"] }));
app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_HOME_URL,
    failureRedirect: "/login/failed",
  })
);
app.get("/github", passport.authenticate("github", { scope: ["profile"] }));
app.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login/failed",
  })
);
app.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));
app.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login/failed",
  })
);
module.exports = app;
