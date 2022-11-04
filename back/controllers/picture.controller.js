const db = require("../models");
const Picture = db.Picture;
const Op = db.Sequelize.Op;

// Create and Save a new picture for User
exports.createPictureForUser = (req, res) => {
  // Create a picture
  const pic = {
    path: req.body.path,
    id_user: req.body.id_user,
  };

  // Save picture in the database
  Picture.create(pic, { include: ["user"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erreur picture",
      });
    });
};

// Create and Save a new picture for Artist
exports.createPictureForArtist = (req, res) => {
  // Create a picture
  const pic = {
    path: req.body.path,
    id_artist: req.body.id_artist,
  };

  // Save picture in the database
  Picture.create(pic, { include: ["artist"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erreur picture",
      });
    });
};

// Create and Save a new picture for Event
exports.createPictureForEvent = (req, res) => {
  // Create a picture
  const pic = {
    path: req.body.path,
    id_event: req.body.id_event,
  };

  // Save picture in the database
  Picture.create(pic, { include: ["event"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erreur picture",
      });
    });
};


// Retrieve all pictures from the database.
exports.findAll = (req, res) => {
  const path = req.query.path;
  var condition = path ? { path: { [Op.like]: `%${path}%` } } : null;

  Picture.findAll({
    where: condition,
    include: ["user", "artist", "event"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erreur lors de la récupération des images",
      });
    });
};

// Find a single Picture with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Picture.findByPk(id, { include: ["user", "artist", "event"] })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Erreur : l'image id=${id} n'a pas été trouvé.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Une erreur est survenue en récupérant l'image id=" + id,
      });
    });
};

// Delete a Picture with the specified id
exports.delete = (req, res) => {
  const id = req.params.id;

  Picture.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "L'image a été supprimé avec succès.",
        });
      } else {
        res.send({
          message: `Impossible de supprimer l'image id=${id}. Peut-être que l'image n'a pas été trouvé.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Impossible de supprimer l'image avec id=" + id,
      });
    });
};
