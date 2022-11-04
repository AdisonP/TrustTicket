module.exports = (app) => {
  const up = require("../controllers/upload.controller.js");
  const uploadFile = require("../middleware/upload.js");


  var router = require("express").Router();

  // Upload file for User
  router.post("/user", uploadFile.uploadFileMiddleware, up.uploadForUser);

  // Upload file for Artist
  router.post("/artist", uploadFile.uploadFileMiddleware, up.uploadForArtist);

  // Upload file for Event
  router.post("/event", uploadFile.uploadFileMiddleware, up.uploadForEvent);

  router.post("/pinMedia", uploadFile.uploadNftMiddleware, up.uploadForPinMedia)

  app.use("/api/upload", router);


};
