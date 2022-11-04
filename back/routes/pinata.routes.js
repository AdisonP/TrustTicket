module.exports = app => {
  const database = require("../database/pinata.config.js");
  var router = require("express").Router();

  router.post("/uploadJson", database.pinJSONToIPFS);
  router.post("/uploadFile", database.pinFileToIPFS);
  router.post("/multipleFile", database.multiplePin);
  app.use('/api/pinata', router);
};
