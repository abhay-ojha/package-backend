const mongoose = require("mongoose");
const { Schema } = mongoose;

const placeSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  package: {
    type: Schema.Types.ObjectId,
    ref: "Package",
  },
});
module.exports = mongoose.model("Place", placeSchema);
