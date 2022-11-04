module.exports = app => {
    const tickets = require("../controllers/tickets.controller")
    var router = require("express").Router()

    router.post("/verif", tickets.checkIfTokenIsOwned)

    app.use('/api', router)
}