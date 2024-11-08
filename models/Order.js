const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required:true
    },
    product:{
      type: Array
    }
})

const Order = mongoose.model("Order",orderSchema)

module.exports = Order;