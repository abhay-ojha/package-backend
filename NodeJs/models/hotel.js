const mongoose = require("mongoose");
const { Schema } = mongoose;

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  package: {
    type: Schema.Types.ObjectId,
    ref: "Package",
  },
});
module.exports = mongoose.model("Hotel", hotelSchema);
