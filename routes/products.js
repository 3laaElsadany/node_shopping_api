var express = require('express');
var router = express.Router();
const {
  getProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products.con')
const multer = require("multer");

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error('Only PNG Images '), false);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'productImg')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})

router.get("/", getProducts)

router.post("/addproduct", upload.single('avatar'), addProduct)

router.get("/:id", getProduct)

router.patch("/:id", updateProduct)

router.delete("/:id", deleteProduct)

module.exports = router