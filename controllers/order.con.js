const Order = require("../models/Order")

const addOrder = (req, res, next) => {
  const newOrder = new Order({
    user: req.body.user,
    product: req.body.product
  })
  newOrder.save()
    .then(doc => {
      res.status(200).json({
        message: doc
      })
    })
    .catch(err => {
      res.status(404).json({
        message: err.message
      })
    })
}

const getOrders = (req, res, next) => {
  Order.find().populate({
      path: 'user',
      select: 'userName -_id'
    })
    .then(doc => {
      res.status(200).json({
        message: doc
      })
    })
    .catch(err => {
      res.status(404).json({
        message: err.message
      })
    })
};

const updateOrder = (req, res, next) => {
  let newProduct = req.body.product;
  Order.findById(req.params.id)
    .then(async (doc) => {
      let oldProduct = doc.product;
      for (let i = 0; i < newProduct.length; i++) {
        for (let y = 0; y < oldProduct.length; y++) {
          if (newProduct[i]._id === oldProduct[y]._id) {
            oldProduct[y].quantity += newProduct[i].quantity;
            newProduct.splice(i, 1);
          }
        }
      }
      oldProduct = oldProduct.concat(newProduct)
      console.log(oldProduct);
      const newOrder = {
        product: oldProduct
      }
      await Order.findByIdAndUpdate(req.params.id, {
          $set: newOrder
        })
        .then(doc => {
          res.status(200).json({
            message: doc
          })
        })
        .catch(err =>
          res.status(404).json({
            message: err.message
          }))
    })
    .catch(err => {
      res.status(404).json({
        message: err.message
      })
    })
};


const deleteOrder = (req, res, next) => {
  Order.findByIdAndDelete(req.params.id)
    .then(doc => {
      res.status(200).json({
        message: "Order deleted"
      })
    })
    .catch(err => {
      res.status(404).json({
        message: err.message
      })
    })
};

module.exports = {
  addOrder,
  updateOrder,
  getOrders,
  deleteOrder
}