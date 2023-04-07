const mongoose = require("mongoose");
const { Schema } = mongoose;

const packageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  no_of_people: {
    type: Number,
    required: true,
  },
  place: {
    type: Schema.Types.ObjectId,
    ref: "Place",
  },
  hotel: {
    type: Schema.Types.ObjectId,
    ref: "Hotel",
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

module.exports = mongoose.model('Package', packageSchema);
