var minter = require('../scripts/mintTicket.js')
var burner = require('../scripts/burnTicket.js')
var pinata = require('../database/pinata.config')
var market = require('../scripts/marketPlaceScripts.js')
var verif = require('../scripts/verificationTicket.js')

const db = require("../models");
const Event = db.Event;

const hardhat = require("hardhat")

const generateTicketCode = () => {


    let chars = '0123456789';


    let str = 'TT';
    for (let i = 0; i < 7; i++) {
        str += chars.charAt(Math.floor(Math.random() * 10));
    }

    return str;

}

exports.testMint = async (req, res) => {
    market.mintTicket().then(() => {
        res.status(200).send({ message: "mint_success" })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({ message: "mint_fail" })
    })
}


exports.testMarket = async (req, res) => {
    market.executeSale().then(() => {
        res.status(200).send({ message: "test_success" })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({ message: "test_fail" })
    })
}


exports.createTickets = async (req, res) => {

    if (req.body.value === undefined || req.body.name === undefined || req.body.description === undefined || req.body.contractAddress === undefined || req.body.price === undefined || req.body.file === undefined) {
        res.status(400).send({ message: "bad_request" })
    } else {


        if (req.body.file) {
            let metadata = []
            for (let i = 0; i < req.body.value; i++) {
                metadata.push({
                    name: req.body.name + `#${i + 1}`,
                    description: req.body.description,
                    image: req.body.file,
                    price: req.body.price,
                    ticketCode: generateTicketCode(),
                    eventDetail: req.body.eventDetail
                })

                console.log(metadata[i])

            }


            let JSONMetaData = []


            for (let i = 0; i < metadata.length; i++) {
                JSONMetaData.push(await pinata.pinJSONToIPFS(metadata[i]))
            }



            await pinata.multiplePin(metadata, res).then(() => {
                const price = parseInt(req.body.price)
                const contractAddress = req.body.contractAddress
                const xToMint = parseInt(req.body.value)
                console.log(`Creating ${req.body.value} tickets on contract ${req.body.contractAddress}`)
                minter.mintTicket(contractAddress, JSONMetaData, xToMint, price).then(() => {
                    res.status(200).send({ message: "mint_success" })
                }).catch((err) => {
                    console.log(err)
                    res.status(500).send({ message: "mint_fail" })
                })
            }
            )

        }



    }


}

exports.burnTicket = async (req, res) => {
    if (req.body.tokenId === undefined || req.body.contractAddress === undefined) {
        res.status(400).send({ message: "bad_request" })
    } else {
        burner.burnTicket(req.body.tokenId, req.body.contractAddress).then(() => {
            res.status(200).send({ message: "burn_success" })
        }).catch((err) => {
            console.log(err)
            res.status(500).send({ message: "burn_fail" })
        })
    }
}

exports.burnMultipleTickets = async (req, res) => {
    if (req.body.tokenIds === undefined || req.body.contractAddress === undefined) {
        res.status(400).send({ message: "bad_request" })
    } else {
        burner.burnMultipleTickets(req.body.tokenIds, req.body.contractAddress).then(() => {
            res.status(200).send({ message: "burn_success" })
        }).catch((err) => {
            console.log(err)
            res.status(500).send({ message: "burn_fail" })
        })
    }
}

exports.checkIfTokenIsOwned = async (req, res) => {
    if (req.body.tokenId === undefined || req.body.contractAddress === undefined) {
        res.status(400).send({ message: "bad_request" })
    } else {
        // event find one by id
        Event.findOne({ where: { contractAddress: req.body.contractAddress } }).then(event => {
            if (event) {
                var arr = event.scannedArray
                // parse string to date and check if is past date
                var dateEvent = new Date(event.event_date).toLocaleDateString()
                var today = new Date().toLocaleDateString('fr-FR')
                if (req.body.date != today) {
                    console.log(today)
                    console.log(req.body.date)

                    res.status(400).send({ message: "Date not valide" })
                } else if (arr.includes(req.body.tokenId)) {
                    res.status(400).send({ message: "scanned" })
                } else {
                    arr.push(req.body.tokenId)
                    Event.update({ scannedArray: arr }, { where: { contractAddress: req.body.contractAddress } }).then(() => {
                        res.status(200).send({ message: "Scann success" })
                    })
                }
            } else {
                res.status(400).send({ message: "event_not_found" })
            }
        })

    }
}