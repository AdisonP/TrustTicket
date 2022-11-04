const { pinFileToIPFS } = require("../database/pinata.config");

const pinJSONToIPFS = require("../database/pinata.config").pinJSONToIPFS;

exports.uploadJson = async (req, res) => {
  try {
    let up = await pinJSONToIPFS
    return res.status(200).json({
      result: up,
    });
  } catch (err) {
    return res.status(500).send({ message: "metadata_upload_fail" });
  }
};

exports.uploadFile = async (req, res) => {
  try {
    let up = await pinFileToIPFS
    return res.status(200).json({
      result: up,
    });
  } catch (err) {
    return res.status(500).send({ message: "file_upload_fail" });
  }
};