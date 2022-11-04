const db = require("../models");
const config = require("../database/auth.config");
const { user: User, role: Role, refreshToken: RefreshToken } = db;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const sendConfirmationEmail = require("../database/nodemailer.config").sendConfirmationEmail;
const us = db.User

exports.signup = (req, done) => {

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
            role_id: role.id
        })
            .then((user) => {
                done();

            })
            .catch((err) => {
                res.status(500).send({ message: err });
                console.log("Error -> " + err)
            })
    })
};

exports.signin = (req, done, dataCb) => {
    us.findOne({
        where: {
            username: req.body.username,
        },
    })
        .then(async (user) => {
            if (!user) {
                return false
            }
            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                return false;
            }
            // If user didn't confirm his account
            if (req.body.status === "INACTIVE") {
                return false;
            }
            const token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: config.jwtExpiration,
            });
            let refreshToken = await RefreshToken.createToken(user);
            let authorities = [];

            db.roles.findByPk(user.role_id).then(role => {
                dataCb({
                    id: user.dataValues.id,
                    username: user.dataValues.username,
                    email: user.dataValues.email,
                    role: role.name,
                    accessToken: token,
                    refreshToken: refreshToken,
                })
                done()
            })
        })
};

exports.update = (req, done, dataCb) => {
    const id = req.params.id;

    us.update(req.body, {
        where: { id: id },
    }).then((num) => {
        if (num == 1) {
            us.findByPk(id).then((data) => {
               dataCb({
                    id: data.id,
                    name: data.name,
                    username: data.username,
                    firstname: data.firstname,
                    email: data.email,
                    phone: data.phone,
                    address: data.address,
                    wallet_address: data.wallet_address
                })
                if(req.params.name == data.name){
                    done()
                }else{
                    console.log("invalid request")
                    return false
                }
            })
        } else {
            console.log("Invalid request");
            return false
        }
    }).catch((error) => {
        console.log( error.message || "Error updating user with id " + id)
        return false
    })
}

exports.findById = (req, done) => {
    const id = req.params.id;

    us.findByPk(id).then((data) => {
        if (data) {
            if(req.params.name == data.name){
                done();
            }
        } else {
            console.log("User not found with id " + id)
            return false
        }
    }).catch((error) => {
        console.log(error.message || "Error lors de la récupération de l'utilisateur avec l'id " + id)
        return false
    })
}
exports.deleteById = (req, done) => {
    const id = req.params.id;

    us.destroy({
        where: { id: id },
    }).then((num) => {
        if (num == 1) {
            done()
        } else {
            console.log("User not found with id " + id)
            return false;
        }
    }).catch((error) => {
        console.log(error.message || "Error deleting user with id " + id)
        return false;
    })
}