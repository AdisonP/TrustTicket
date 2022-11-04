const authJwt = require("../middleware/authJwt.js");

module.exports = app => {
    const event = require("../controllers/event.controller.js");
    var router = require("express").Router();


    // Create a new event
    router.post("/", authJwt.isOrganisatorAuthentified, event.create);
    // Retrieve all event
    router.get("/", event.findAll);
    // Retrieve a single event with id
    router.get("/:id", event.findOne);
    // Retrieve filter events
    router.post("/all/sort", event.findAllFilter);
    // Update a event with id
    router.put("/:id", authJwt.isOrganisatorAuthentified, event.update);
    // Delete a event with id
    router.delete("/:id", authJwt.isOrganisatorAuthentified, event.delete);

  
    
    app.use('/api/events', router);
  };