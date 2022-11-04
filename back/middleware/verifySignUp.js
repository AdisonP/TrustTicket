const db = require("../models");
const { verifyToken } = require("./authJwt");
const ROLES = db.ROLES;
const User = db.User;
const jwt = require("jsonwebtoken");
const config = require("../database/auth.config.js");
const { checkIfRoles, checkUserMail, checkIfUserNameExist, checkIfWalletExist } = require("../controllers/utils");
var bcrypt = require("bcrypt");
//ADD CHECK DUPLICATE TOKEN
signupIsValid = async (req, res, next) => {

  var errorMsg = "Veuillez renseignez les champs suivant : ";
  var error = false;
  if (req.body.role == "user") {
    if (!req.body.username) {
      error = true;
      errorMsg += " \n- Username";
    } if (!req.body.email) {
      error = true;
      errorMsg += " \n- Email";
    } if (!req.body.password) {
      error = true;
      errorMsg += " \n- Password";
    }if (!req.body.role) {
      error = true;
      errorMsg += " \n- Role";
    }
  } else {
    if (!req.body.username) {
      error = true;
      errorMsg += " \n- Username";
    } if (!req.body.email) {
      error = true;
      errorMsg += " \n- Email";
    } if (!req.body.password) {
      error = true;
      errorMsg += " \n- Password";
    } if (!req.body.name) {
      error = true;
      errorMsg += " \n- Name";
    } if (!req.body.firstname) {
      error = true;
      errorMsg += " \n- Firstname";
    } if (!req.body.phone) {
      error = true;
      errorMsg += " \n- Phone";
    } if (!req.body.address) {
      error = true;
      errorMsg += " \n- Address";
    } if (!req.body.role) {
      error = true;
      errorMsg += " \n- Role";
    }
  }

  if (error) {
    res.status(403).send({
      message: errorMsg
    });
    res.end();
    return;
  }
  // Role exist
  if (!error) {
    await checkIfRoles(req.body.role).then((exist) => {
      if (!exist) {
        res.status(400).send({
          message: "the role does not exist"
        });
        res.end();
        error = true;
        return;
      }
    })
  }
  // Wallet address exist 
  if (!error && req.body.wallet_address != undefined) {
    await checkIfWalletExist(req.body.wallet_address).then((exist) => {
      if (exist) {
        res.status(400).send({
          message: "Failed! Wallet Address is already in use!"
        });
        res.end();
        error = true;
        return;
      }
    })
  }

  // Username
  if (!error) {
    await checkIfUserNameExist(req.body.username).then((exist) => {
      if (exist) {
        res.status(400).send({
          message: "Failed! Username is already in use!"
        });
        res.end();
        error = true;
        return;
      }
    })
  }

  // Email
  if (!error) {
    await checkUserMail(req.body.email).then((exist) => {
      if (exist) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        res.end();
        error = true;
        return;
      }
    })
  }

  if (error == false) {
    next();
  }
};
checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        res.end();
        return;
      }
    }
  }

  next();
};

checkUserId = (req, res, next) => {
  let token = req.headers["authorization"];
  var error = false;
  if (!token) {
    error = true;
    res.status(403).send({
      message: "No token provided!"
    });
    return;
  }
  jwt.verify(token.split(" ")[1], config.secret, (err, decoded) => {
    if (err) {
      error = true;
      res.status(401).send({
        message: "Unauthorized!"
      });
      return;
    }
    if (req.params.id != decoded.id) {
      error = true;
      res.status(400).send({
        message: "You dont have permission"
      });
      return;
    }

  });
  if(error == false){
    next();
  }
};

exports.checkUpdate = async (req, res, next) => {
  var idUser = null;
  let token = req.headers["authorization"];
  let tokenerror = false;

  console.log(req.headers)
  if (!token) {
    res.status(403).send({
      message: "No token provided!"
    });
    tokenerror = true
    return;
  }
  
  jwt.verify(token.split(" ")[1], config.secret, (err, decoded) => {
    if (err) {
      res.status(401).send({
        message: "Unauthorized!"
      });
      tokenerror = true
      return;
    }
    if (req.params.id != decoded.id) {
      res.status(400).send({
        message: "You dont have permission"
      });
      tokenerror = true
      return;
    }
    idUser = decoded.id; 
  });
  if(tokenerror == false){
  var error = false;

  if (error) {
    res.status(403).send({
      message: errorMsg
    });
    res.end();
    return;
  }
  // GET CURRENT USER DATA FOR CHECK UNIQ KEYS
  const user = await User.findByPk(idUser).then(us => {
    if(!us){
      res.status(400).send({
        message: "user does not exist"
      });
      error = true;
      return;
    }else{
      return us;
    }
  })
  // // To uncomment if roles can be edit 
  // // Role exist
  // if (!error) {
  //   await checkIfRoles(req.body.role).then((exist) => {
  //     if (!exist) {
  //       res.status(400).send({
  //         message: "the role does not exist"
  //       });
  //       res.end();
  //       error = true;
  //       return;
  //     }
  //   })
  // }
  
  // Wallet address exist 
  if(req.body.wallet_address != undefined ){
    if (!error && user.wallet_address != req.body.wallet_address) {
      await checkIfWalletExist(req.body.wallet_address).then((exist) => {
        if (exist) {
          res.status(400).send({
            message: "Failed! Wallet Address is already in use!"
          });
          res.end();
          error = true;
          return;
        }
      })
    }
  }

  // Username
  if(req.body.username != undefined){
    if (!error && user.username != req.body.username) {
      await checkIfUserNameExist(req.body.username).then((exist) => {
        if (exist) {
          res.status(400).send({
            message: "Failed! Username is already in use!"
          });
          res.end();
          error = true;
          return;
        }
      })
    }
  }

  // Email
if(req.body.email != undefined){
  if (!error && user.email != req.body.email) {
    await checkUserMail(req.body.email).then((exist) => {
      if (exist) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        res.end();
        error = true;
        return;
      }
    })
  }
}

if(req.body.password != undefined && error == false){
  req.body.password = bcrypt.hashSync(req.body.password, 8)
}

if(req.body.role_id != undefined){
  res.status(400).send({
    message: "the role cannot be edited"
  });
  res.end();
  error = true;
}

  if (error == false) {
    next();
  }
}
};

const verifySignUp = {
  signupIsValid
    : signupIsValid
  ,
  checkUpdate : this.checkUpdate,
  checkRolesExisted: checkRolesExisted,
  checkUserId: checkUserId
};

module.exports = verifySignUp;