const db =  require("../models");
const Transaction = db.Transaction;
const bcrypt =  require("bcrypt");

// Create NEW EVENT
exports.create = (req, res) => {
    const transaction = {
        date: req.body.date,
        status: req.body.status,
    };

    Transaction.create(transaction)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Erreur lors de la création de la transaction",
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Transaction.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Transaction was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Transaction with id=${id}. Maybe Transaction was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Transaction with id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {
  Transaction.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Transactions were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Transaction."
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Transaction.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Transaction was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Transaction with id=${id}. Maybe Transaction was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Transaction with id=" + id
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Transaction.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Transaction with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Transaction with id=" + id
      });
    });
};

exports.findAll = (req, res) => {
  Tutorial.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};