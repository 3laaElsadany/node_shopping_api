var express = require('express');
var router = express.Router();
const {
  addOrder,
  updateOrder,
  getOrders,
  deleteOrder
} = require('../controllers/order.con')

router.get("/", getOrders)

router.post("/addorder", addOrder)

router.patch("/updateorder/:id", updateOrder)

router.delete("/:id", deleteOrder)

module.exports = router