// const db =  require("../models");
// const Role = db.roles;


// exports.create = (req, res) => {
//     const role = {
//         name: req.body.name,
//     };
//     Role.create(role)
//         .then((data) => {
//         res.send({
//             message : "Le role à bien été crée"
//         })
//           console.log(data)
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: err.message || "Erreur lors de la création du role",
//             });
//         });
// };