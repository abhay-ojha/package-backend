const express = require("express");
var router = express.Router();

var Hotel = require("../models/hotel");
var Place = require("../models/place");
var Restaurant = require("../models/restaurant");
var Package = require("../models/package");
const { default: mongoose } = require("mongoose");
const toId = mongoose.Types.ObjectId

module.exports = () => {
  router.get("/:package/:place/:hotel/:restaurant", async (req, res) => {
    const place = toId(req.params.place) 
    const hotel = toId(req.params.hotel) 
    const restaurant = toId(req.params.restaurant) 
    const package = await Package.findById(req.params.package)
    package.place = place;
    package.hotel = hotel;
    package.restaurant = restaurant;
    package.save();
    res.json(package);
  });

  router.get("/see", async(req, res) => {
    const package = 
    Package.find()
    .populate('place')
    .populate('hotel')
    .populate('restaurant');
    res.json(package);
  })

  router.post("/", (req, res) => {
    console.log("in the post");
    var package = new Package({
      name: req.body.name,
      duration: req.body.duration,
      no_of_people: req.body.no_of_people,
    });

    var place = new Place({
      city: req.body.city,
      state: req.body.state,
    });

    var hotel = new Hotel({
      name: req.body.hotelName,
    });

    var restaurant = new Restaurant({
      name: req.body.restaurantName,
    });

    package.save();
    place.save();
    hotel.save();
    restaurant.save();
  });
};
