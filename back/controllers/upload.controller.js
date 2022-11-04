const { fromString } = require("uuidv4");
const { pinFileToIPFS } = require("../database/pinata.config");
const db = require("../models");
const fs = require('fs')
const Picture = db.Picture;

const uploadForUser = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    Picture.create({
      id_user: req.body.id_user,
      path: "/images/" + req.file.originalname,
    });
    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

const uploadForPinMedia = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    const cid = await pinFileToIPFS(req.file.path, res).catch((err) => console.log(err))


    if (cid != null) {
      res.status(200).send({ ipfs: cid })
    }



  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}.${err}`,
    });
  }
};

const uploadForArtist = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    Picture.create({
      id_artist: req.body.id_artist,
      path: "/images/" + req.file.originalname,
    });
    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

const uploadForEvent = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    Picture.create({
      id_event: req.body.id_event,
      path: "/images/" + req.file.originalname,
    });
    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};



module.exports = {
  uploadForUser,
  uploadForArtist,
  uploadForEvent,
  uploadForPinMedia
};
