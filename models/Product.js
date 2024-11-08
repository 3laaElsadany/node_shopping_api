const mongoose = require("mongoose");
const { Schema } = mongoose;
const ptroductSchema = new Schema({
  name: {
    type:String,
    required: true
  },
  price:{
    type:Number,
    required:true
  },
  avatar:{
    type:String,
    required:true
  }
})

const Product = mongoose.model("Product",ptroductSchema)

module.exports = Product;