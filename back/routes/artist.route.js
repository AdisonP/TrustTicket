module.exports = app => {
    const artiste = require("../controllers/artist.controller.js");
    var router = require("express").Router();
    // Create a new artist
    router.post("/", artiste.create);
    // get artist with filter ( include all )
    router.post("/sort", artiste.sort);
    
    app.use('/api/artist', router);
  };