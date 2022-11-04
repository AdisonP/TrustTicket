const db =  require("../models");
const Categorie = db.Categorie;


exports.create = (req, res) => {
    const categorie = {
        categorie_name: req.body.name,
    };
    Categorie.create(categorie)
        .then((data) => {
        res.send({
            message : "ok"
        })
          console.log(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Erreur lors de la création de la  categorie",
            });
        });
};
exports.findAll = (req, res) => {
    Categorie.findAll()
        .then((data) => {
        res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Erreur lors de la requête",
            });
        });
}