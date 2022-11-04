const db = require("../models");
const config = require("../database/auth.config");
const { user: User, role: Role, refreshToken: RefreshToken } = db;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const sendConfirmationEmail = require("../database/nodemailer.config").sendConfirmationEmail;
const us = db.User

exports.signup = (req, res) => {

  // Create confirmation code (email verification)
  const confirmationCode = jwt.sign({ email: req.body.email }, config.secret);
  // Save User to Database
  db.roles.findOne({ where: { name: req.body.role } }).then((role) => {
    us.create({
      name: req.body.name,
      username: req.body.username,
      address: req.body.address,
      token: confirmationCode,
      firstname: req.body.firstname,
      password: bcrypt.hashSync(req.body.password, 8),
      email: req.body.email,
      phone: req.body.phone,
      wallet_address: req.body.wallet_address == undefined ? null : req.body.wallet_address,
      //confirmationCode: confirmationCode,
      role_id: role.id
    })
      .then((user) => {
        // sendConfirmationEmail(
        //   req.body.username,
        //   req.body.email,
        //   confirmationCode
        // );
        res.send({ message: "User was registered successfully!" });

      })
      // .then((user) => {
      //   if (req.body.roles) {
      //     Role.findAll({
      //       where: {
      //         name: {
      //           [Op.or]: req.body.roles,
      //         },
      //       },
      //     }).then((roles) => {
      //       user.setRoles(roles).then(() => {
      //         res.send({ message: "User was registered successfully!" });
      //       });
      //       sendConfirmationEmail(
      //         req.body.username,
      //         req.body.email,
      //         confirmationCode
      //       );
      //     });
      //   } else {
      //     // user role = 1
      //     user.setRoles([1]).then(() => {
      //       res.send({ message: "User was registered successfully!" });
      //     });
      //     sendConfirmationEmail(
      //       req.body.username,
      //       req.body.email,
      //       confirmationCode
      //     );
      //   }
      // })
      .catch((err) => {
        res.status(500).send({ message: err });
        console.log("Error -> " + err)
      })
  })
};
exports.signin = (req, res) => {
  us.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: "Ce compte n'existe pas!" });
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Mot de passe invalide !",
        });
      }
      // If user didn't confirm his account
      if (req.body.status === "INACTIVE") {
        return res.status(403).send({
          message: "Pending account. Please verify your email and try again.",
        });
      }
      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: config.jwtExpiration,
      });
      let refreshToken = await RefreshToken.createToken(user);
      let authorities = [];

      db.roles.findByPk(user.role_id).then(role => {
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          role: role.name,
          accessToken: token,
          refreshToken: refreshToken,
          walletAddress: user.wallet_address,
        });
      })
    })
};


exports.verifyEmail = (req, res, next) => {
  us.findOne({
    confirmationCode: req.params.confirmationCode,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Ce compte n'existe pas!" });
      }

      user.status = "ACTIVE";
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    })
    .catch((err) => {
      console.log("VerifyEmail Error : ", err);
    });
};

exports.refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;
  console.log("totot -> " + requestToken);
  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }
  try {
    let refreshToken = await RefreshToken.findOne({
      where: { token: requestToken },
    });
    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      return;
    }
    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.destroy({ where: { id: refreshToken.id } });

      res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
      return;
    }
    const user = await refreshToken.getUser();
    let newAccessToken = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });
    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (err) {
    return res.status(500).send({ message: "NOPE" });
  }
};

exports.logout = (req, res) => {
  us.update({ token: "none" }, {
    where: { id: req.body.userId },
  }).then((num) => {
    if (num == 1) {
      res.send({
        message: "logout successfully"
      })
    } else {
      res.status(404).send({
        message: "User not found with id " + id
      })
    }
  }).catch((error) => {
    res.status(500).send({
      message: error.message || "Error logout user with id " + id
    })
  })
};
