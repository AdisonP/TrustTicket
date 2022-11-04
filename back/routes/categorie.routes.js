module.exports = app => {
    const cat = require("../controllers/categorie.controller.js");
    var router = require("express").Router();
    // Create a new categorie
    router.post("/", cat.create);
    // Retrieve all categorie
    router.get("/", cat.findAll);
    
    app.use('/api/categorie', router);
  };