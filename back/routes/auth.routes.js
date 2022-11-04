const authJwt = require("../middleware/authJwt.js");
const verifySignUp = require("../middleware/verifySignUp");

module.exports = app => {
  const controller = require("../controllers/auth.controller.js");
  var router = require("express").Router();

  router.post("/refreshtoken", controller.refreshToken);
  router.post("/signup", verifySignUp.signupIsValid, controller.signup);
  router.post("/signin", controller.signin);
  router.post("/logout", authJwt.verifyToken, controller.logout);
  router.get("/confirm/:confirmationCode", controller.verifyEmail);
  app.use('/api/auth', router);
};
