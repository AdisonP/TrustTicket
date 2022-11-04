const db = require('../models')
const Event = db.Event
const Artist = db.Artist
const Categorie = db.Categorie
const bcrypt = require('bcrypt')

const Picture = db.Picture

const { Op, sequelize } = require('sequelize')
const { Sequelize } = require('../models')
const { DB } = require('../database/db.config')
const deployer = require('../scripts/deployMarketPlace')
const { isReadable } = require('nodemailer/lib/xoauth2')

// Create NEW EVENT
exports.create = async (req, res) => {
  var categorieId = 0
  var error = false
  //var listUnvaliableArtist = []
  var listValiableArtistId = []
  // check if artist
  if (req.body.artists != undefined) {
    for (let i = 0; i < req.body.artists.length; i++) {
      const art = req.body.artists[i]
      // check if artist exist for set id or create him
      await db.Artist.findOne({ where: { name: art } }).then(async (a) => {
        if (a) {
          listValiableArtistId.push(a.id)
        } else {
          await db.Artist.create({
            name: art,
          }).then((aa) => {
            listValiableArtistId.push(aa.id)
          })
        }
      })
    }
    // ARTIST NOT EXIST ERROR
    // if(listUnvaliableArtist.length > 0){
    //   error = true;
    //   res.status(404).send({
    //     message: "Artist not found",
    //     artist: listUnvaliableArtist
    //   });
    //   res.end()
    // }
  }
  if (error == false) {
    //Check if categorie
    await db.Categorie.findOne({
      where: {
        categorie_name:
          req.body.categorie == undefined ? null : req.body.categorie,
      },
    }).then((cat) => {
      if (cat) {
        categorieId = cat.id
      } else {
        error = true
        res.status(404).send({
          message: 'Categorie is not found',
        })
      }
    })
  }
  if (error == false) {
    const event = {
      name: req.body.name,
      description: req.body.description,
      type: req.body.type,
      event_date: req.body.event_date,
      price: req.body.price,
      localisation: req.body.localisation,
      id_categorie: categorieId,
      rating: req.body.rating,
      id_organisator: req.body.id_organisator,
      organisatorWallet: req.body.organisatorWallet,
      scannedArray: [],
      contractAddress: await deployer.deployContract().catch((err) => console.log(err)),
    };
    Event.create(event)
      .then((data) => {
        if (req.body.id_organisator === undefined) {
          res.status(500).send({
            message:
              "Error creating Event, id_seller cannot be null. Please try again!",
          });
        } else {

          if (listValiableArtistId.length != 0) {
            //for list artist 
            for (let i = 0; i < listValiableArtistId.length; i++) {
              var artid = listValiableArtistId[i]
              data.setArtist(artid, data.id)
            }
            res.send(data)
          }
          res.send(data)
          console.log(data)
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Erreur lors de la création de l'event",
        })
      })
  } else if (deployErr) {
    res.status(500).send({
      message:
        "Le réseau Polygon rencontre actuellement des problèmes et nous n'arrivons pas a déployer votre contrat , veuillez réessayer plus tard.",
    })
  }

}

exports.delete = (req, res) => {
  const id = req.params.id
  Event.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Event was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Event with id=${id}. Maybe Event was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Event with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Event.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Event were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Events.',
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Event.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Event was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating event with id=' + id,
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  Event.findByPk(id, {
    include: [
      {
        model: Picture,
        attributes: ['id', 'path', 'id_event'],
      },
      {
        model: Categorie,
        as: 'categorie',
        attributes: ['id', 'categorie_name'],
      },
    ],
  })
    .then(async (data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Event with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Event with id=' + id,
      })
    })
}

exports.findAll = (req, res) => {
  Event.findAll({
    include: [
      {
        model: Picture,
        attributes: ['id', 'path', 'id_event'],
      },
      {
        model: Artist,
        as: 'artist',
      },
    ],
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving events.',
      })
    })
}

exports.findAllFilter = (req, res) => {
  var catFilter =
    req.body.categorie_id != undefined
      ? { [Op.like]: req.body.categorie_id }
      : { [Op.notLike]: -999 }
  var orgFilter =
    req.body.organisator_id != undefined
      ? { [Op.like]: req.body.organisator_id }
      : { [Op.notLike]: -999 }
  // var typeFilter = req.body.type != undefined ? { [Op.regexp]: `.*${req.body.type}.*` } : { [Op.notLike]: -999 }
  Event.findAll({
    where: {
      id_categorie: catFilter,
      id_organisator: orgFilter,
      // type: typeFilter,
      name: {
        [Op.regexp]: `.*${req.body.name == undefined ? '' : req.body.name}.*`,
      },
    },
    include: [
      {
        model: Picture,
        attributes: ['id', 'path'],
      },
      {
        model: Categorie,
        as: 'categorie',
        attributes: ['id', 'categorie_name'],
      },
      {
        model: Artist,
        as: 'artist',
        attributes: ['id', 'name'],
      },
    ],
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving events.',
      })
    })
}
