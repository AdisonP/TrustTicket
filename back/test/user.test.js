// const assert = require('assert');
// const user = require("../controllers/user.controller.js");
// const axios = require("axios")
// const db = require("../models");
// const config = require("../database/auth.config");
// const { user: User, role: Role, refreshToken: RefreshToken } = db;
// const Op = db.Sequelize.Op;
// var jwt = require("jsonwebtoken");
// var bcrypt = require("bcrypt");
// const sendConfirmationEmail = require("../database/nodemailer.config").sendConfirmationEmail;
// const us = db.User
// const controller = require("../controllers/test.controller")
// var userBundle = null

// const dataCb = (userData) => {
//     userBundle = userData
// }


// describe('user', () => {
//     it("Register user", (done) => {
//         var user = {
//             "name": "test",
//             "firstname": "test",
//             "username": "test",
//             "password": "test",
//             "email": "test@t.fr",
//             "phone": 12121212,
//             "wallet_address": "test",
//             "address": "test",
//             "role": "organisator"
//         }
//         req = {
//             body: user
//         }
//         controller.signup(req, done)
//     })
//     it("Login user", (done) => {
//         var user = {
//             "username": "test",
//             "password": "test",
//         }
//         req = {
//             body: user
//         }
//         controller.signin(req, done, dataCb)
//     })

//     it("Update user", (done) => {
//         var newUser = {
//             "name": "testON",
//             "firstname": "testON",
//             "username": "testON",
//             "password": "testON",
//             "email": "testON@t.fr",
//             "phone": 12121213,
//             "wallet_address": "testON",
//             "address": "testON",
//         }
//         req = {
//             body: newUser,
//             params: {
//                 name: newUser.name,
//                 id: userBundle.id
//             }
//         }
//         controller.update(req, done, dataCb)
//     })

//     it("Get user by id", (done) => {
//         req = {
//             params: {
//                 id: userBundle.id,
//                 name: userBundle.name
//             }
//         }
//         controller.findById(req, done)
//     })

//     it("Delete user", (done) => {
//         req = {
//             params: {
//                 id: userBundle.id
//             }
//         }

//         controller.deleteById(req, done)
//     })
// })



