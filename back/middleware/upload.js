const util = require("util");
const multer = require("multer");
const maxSize = 57 * 1024 * 1024;
const { uuid } = require("uuidv4");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      cb(null, __basedir + "/public/images/");
    } catch (err) {
      cb(err);
    }
  },
  filename: (req, file, cb) => {
    file.originalname = uuid() + ".png";
    cb(null, file.originalname, req);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");



let storageNFT = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      cb(null, __basedir + "/assets/");
    } catch (err) {
      cb(err);
    }
  },
  filename: (req, file, cb) => {
    file.originalname = uuid() + ".png";
    cb(null, file.originalname, req);
  },
});

let uploadNFT = multer({
  storage: storageNFT,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);

let uploadNftMiddleware = util.promisify(uploadNFT)
module.exports = { uploadFileMiddleware, uploadNftMiddleware }
