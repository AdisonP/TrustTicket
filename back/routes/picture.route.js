module.exports = (app) => {
  const picture = require("../controllers/picture.controller.js");

  var router = require("express").Router();

  // Create a new pic for User
  router.post("/user", picture.createPictureForUser);

  // Create a new pic for Artist
  router.post("/artist", picture.createPictureForArtist);

  // Create a new pic for Event
  router.post("/event", picture.createPictureForEvent);

  // Retrieve all pictures
  router.get("/", picture.findAll);

  // Retrieve a single picture with id
  router.get("/:id", picture.findOne);

  // Delete a article with id
  router.delete("/:id", picture.delete);

  app.use("/api/pictures", router);
};
