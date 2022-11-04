
module.exports = app => {
    const tickets = require("../controllers/tickets.controller")
    var router = require("express").Router()

    router.post("/mintTickets", tickets.createTickets)
    router.post("/testMint", tickets.testMint)
    router.post("/testMarket", tickets.testMarket)

    app.use('/api', router)
}