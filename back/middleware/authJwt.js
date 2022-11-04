const jwt = require("jsonwebtoken");
const { checkIfOrganisatorExist, getRolesId } = require("../controllers/utils.js");
const config = require("../database/auth.config.js");
const db = require("../models");
const User = db.User;
const Event = db.Event;
const { TokenExpiredError } = jwt;
const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }
  return res.sendStatus(401).send({ message: "Unauthorized!" });
}

verifyToken = (req, res, next) => {
  let token = req.headers["Authorization"];
  //Pourquoi get le token dans le body et l'auth ???
  // let tokenBody = req.body.token
  // console.log(req)
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.body.userId = decoded.id;
    next();
  });
};

// isOrganisator = (req, res, next) => {
//   console.log(req.body)
//   User.findByPk(req.body.id_seller).then(user => {
//     console.log(user)
//     user.getRoles().then(roles => {
//       if (roles.name === "organisator") {
//         next();
//         return;
//       }
//       res.status(403).send({
//         message: "Require Organisator Role!"
//       });
//     });
//   });
// };

isOrganisator = (req, res, next) => {
  // Token check
  let token = req.headers["authorization"];

  if (!token) {
    res.status(403).send({
      message: "No token provided!"
    });
    return;
  } else {
    // Token id compare 
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        console.log(err)
        res.status(401).send({
          message: "Unauthorized!"
        });
        return;
      }
      // Check event organisator
      User.findByPk(decoded.id).then(user => {

        user.getRoles().then(roles => {
          if (roles.name === "organisator") {
            next();
            return;
          }
          res.status(403).send({
            message: "Require Organisator Role!"
          });
        });
      });
    });
  }


};





// Check if is auth & have orga roles & permission 
isOrganisatorAuthentified = (req, res, next) => {
  var decodedId = null;

  // Token check
  let token = req.headers["authorization"];

  let splitToken = token.replace("Bearer ", "")


  if (!token) {
    res.status(403).send({
      message: "No token provided!"
    });
    return;
  } else {

    // Token id compare 
    jwt.verify(splitToken, config.secret, (err, decoded) => {
      if (err) {
        res.status(401).send({
          message: "Unauthorized!"
        });
        return;
      } else {
        decodedId = decoded.id;
      }

    });

    if (decodedId != null) {
      db.User.findByPk(decodedId).then(user => {
        if (user) {
          user.getRoles().then(roles => {
            if (roles.name == "organisator") {
              req.body.id_organisator = decodedId;
              next();
            } else {
              res.status(403).send({
                message: "Require Organisator Role!"
              });
            }
          })
        } else {
          res.status(403).send({
            message: "User is not valid"
          });
        }
      });
    }
  }


};

checkUserSignuP = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "organisator") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Organisator Role!"
      });
    });
  });
};


const authJwt = {
  verifyToken: verifyToken,
  isOrganisator: isOrganisator,
  isOrganisatorAuthentified: isOrganisatorAuthentified
};
module.exports = authJwt;