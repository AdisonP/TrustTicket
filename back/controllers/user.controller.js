const db =  require("../models");
const User = db.User;
const bcrypt = require("bcrypt");
const Picture = db.Picture;


// Create NEW USER
exports.create = (req, res) => {
    const user = {
        name: req.body.name,
        username: req.body.username,
        address: req.body.address,
        token: req.body.token,
        firstname: req.body.firstname,
        password: bcrypt.hashSync(req.body.password, 8),
        email: req.body.email,
        phone: req.body.phone,
        wallet_address: req.body.wallet_address,
        roles: req.body.roles,
    }

    User.create(user)
        .then((data) => {
            res.send(data);
        })
        .catch(() => {
            res.status(500).send({
                message: err.message || "Erreur lors de la création du User",
            });
        });
};

// Get ALL USERS
exports.findAll = (req, res) => {
    User.findAll({
      include: [
        {
          model: Picture,
          attributes: ["id", "path", "id_user"],
        },
      ],
    })
      .then((data) => {
        res.send("All users : " + data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "Error lors de la récupération des utilisateurs",
        });
      });
}

// Get USER BY ID
exports.findById = (req, res) => {
    const id = req.params.id;

    User.findByPk(id, {
      include: [
        {
          model: Picture,
          attributes: ["id", "path", "id_user"],
        },
      ],
    })
      .then((data) => {
        if (data) {
          res.send({
            name: data.name,
            username: data.username,
            address: data.address,
            firstname: data.firstname,
            email: data.email,
            phone: data.phone,
            wallet_address: data.wallet_address,
            roles: data.roles,
          });
        } else {
          res.status(404).send({
            message: "User not found with id " + id,
          });
        }
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Error lors de la récupération de l'utilisateur avec l'id " + id,
        });
      });
}

// Update USER BY ID
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id },
    }).then((num) => {
        if (num == 1) {
            User.findByPk(id).then((data) => {
                res.send({
                    name : data.name,
                    username: data.username,
                    firstname: data.firstname,
                    email: data.email,
                    phone: data.phone,
                    address: data.address, 
                    wallet_address: data.wallet_address
                })
            })
        } else {
            res.status(404).send({
                message: "Invalid request "
            })
        }
    }).catch((error) => {
        res.status(500).send({
            message: error.message || "Error updating user with id " + id
        })
    })
}

// Delete USER BY ID
exports.deleteById = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id },
    }).then((num) => {
        if (num == 1) {
            res.send({
                message: "User deleted successfully"
            })
        } else {
            res.status(404).send({
                message: "User not found with id " + id
            })
        }
    }).catch((error) => {
        res.status(500).send({
            message: error.message || "Error deleting user with id " + id
        })
    })
}



