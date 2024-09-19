const express = require("express");
const {Router} = express;
const {Apiresponse} = require("../../Utils/ApiResponse.js")
const {CreateUser} = require ("../../Controller/User.controller.js")
const _ = Router()
_.route("/registration").post(CreateUser)

module.exports= _;