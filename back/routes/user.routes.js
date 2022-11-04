const verifySignUp = require("../middleware/verifySignUp");

module.exports = app => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();
    // Create a new user
    //router.post("/", user.create);
    // // Retrieve all user
    // router.get("/", user.findAll);
    
    // Retrieve a single user with id
    router.get("/:id", verifySignUp.checkUserId, user.findById);
    // Update a user with id
    router.put("/:id",verifySignUp.checkUpdate, user.update);
    // Delete a user with id
    router.delete("/:id", verifySignUp.checkUserId,user.deleteById);
    //Delete all user
    //router.delete("/", user.deleteAll);
    app.use('/api/users', router);
  };