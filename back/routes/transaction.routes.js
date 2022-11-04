module.exports = app => {
    const transaction = require("../controllers/transaction.controller.js");
    var router = require("express").Router();
    // Create a new transaction
    router.post("/", transaction.create);
    // Retrieve all transaction
    router.get("/", transaction.findAll);
    // Retrieve a single transaction with id
    router.get("/:id", transaction.findOne);
    // Update a transaction with id
    router.put("/:id", transaction.update);
    // Delete a transaction with id
    router.delete("/:id", transaction.delete);
    
    app.use('/api/transactions', router);
  };