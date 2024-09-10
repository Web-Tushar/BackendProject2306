const express = require("express");
const {Router} = express;
const {Apiresponse} = require("../../Utils/ApiResponse.js")
const _ = Router()
_.route("/4").get((req,res)=>{
     // console.log("hello js");
          res.status(200).json(new Apiresponse(true,"mern 2306",false, "everything is okay"))

})

module.exports= _;