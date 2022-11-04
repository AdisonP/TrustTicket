const dotenv = require("dotenv");
dotenv.config();
const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;
const database = require("../database/pinata.config.js");
const fs = require('fs');

const axios = require("axios");
const { fromString } = require("uuidv4");

module.exports.pinJSONToIPFS = async (req, res) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  var axios = require("axios");

  var config = {
    method: "post",
    url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    headers: {
      pinata_api_key: key,
      pinata_secret_api_key: secret,
    },
    data: req,
  };

  return axios(config)
    .then(function (response) {
      return response.data.IpfsHash
    })
    .catch((err) => {
      res.status(500).json({ message: "Fail upload pinata: " + err });
    });
};

module.exports.pinFileToIPFS = async (req, res) => {
  var axios = require("axios");
  var FormData = require('form-data')
  var data = new FormData()

  data.append("file", fs.createReadStream(req))

  var config = {
    method: "post",
    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
    headers: {
      pinata_api_key: key,
      pinata_secret_api_key: secret,
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      console.log(
        "L'upload a pinata est succès : " +
        "https://gateway.pinata.cloud/ipfs/" +
        response.data.IpfsHash
      );
      return "ipfs://" + response.data.IpfsHash;
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "media_upload_fail" + err });
    });
};

module.exports.multiplePin = async (req, res) => {


};
