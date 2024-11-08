const Product = require("../models/Product")

const getProducts = (req, res, next) => {
  Product.find().select(" name price _id")
    .then(doc => {
      const response = {
        doc: doc.map(doc => {
          return {
            name: doc.name,
            price: doc.price,
            _id: doc._id,
            url: {
              type: "GET",
              urls: `localhost:3000/products/${doc._id}`
            }
          }
        })
      }
      res.status(200).json({
        product: response
      })
    })
    .catch(err => {
      res.status(404).json({
        message: err.message
      })
    })
}


const addProduct = (req, res, next) => {
  console.log(req.file)
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    avatar: req.file.path
  })
  product.save()
    .then(doc => {
      res.status(200).json({
        message: "Product added successfully",
        product: doc
      })
    })
    .catch(err => {
      res.status(404).json({
        message: "Failed to add product"
      })
    })
}

const getProduct = (req, res, next) => {
  Product.find({
      _id: req.params.id
    })
    .then(result => {
      res.status(200).json({
        product: result
      })
    })
    .catch()
};

const updateProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price
  };

  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      $set: newProduct
    }, {
      new: true
    });

    if (!updatedProduct) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }

    res.status(200).json({
      message: updatedProduct
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};


const deleteProduct = (req, res, next) => {
  Product.findByIdAndDelete(req.params.id)
    .then(result => {
      res.status(200).json({
        message: "Product deleted successfully"
      })
    })
    .catch(err => {
      res.status(404).json({
        message: err.message
      })
    })

};

module.exports = {
  getProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct
}