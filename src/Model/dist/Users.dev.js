"use strict";

var mongoose = require("mongoose");

var Userschema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true
  },
  phone_number: {
    type: String
  },
  city: {
    type: String // required:true,

  },
  code: {
    type: Number // required:true

  },
  lang: {
    type: String
  },
  step: {
    type: String,
    "default": 0,
    required: true
  }
});
var users = mongoose.model("users", Userschema);
module.exports = users;