const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema(
  {
    ID: {
      type: String,
    },
    Nombre: {
      type: String,
    },
    Marca: {
      type: String,
    },
    Caducidad: {
      type: Date,
    },
    
  },
  {
    collection: "products",
  }
);

module.exports = mongoose.model("product", productSchema);