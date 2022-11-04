module.exports = app => {
    const tickets = require("../controllers/tickets.controller")
    var router = require("express").Router()

    router.post("/burnTicket", tickets.burnTicket)
    router.post("/burnMultipleTickets", tickets.burnMultipleTickets)

    app.use('/api', router)
}