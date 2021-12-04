const router = require("express").Router();
const passport = require("passport");
const CLIENT_HOME_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Login Successful",
      user: req.user,
    });
  }
});
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Login failed",
  });
});
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_URL);
});
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_HOME_URL,
    failureRedirect: "/login/failed",
  })
);
module.exports = router;
