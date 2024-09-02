const express = require('express');
const {Router} = express;
// const {CreateUser}= require("../Controller/User.controller");
// const { MongoGridFSChunkError } = require('mongodb');
const authRoutes = require("./Api/auth.ApiRoute.js")
const {ApiError} = require("../Utils/ApiError.js")
const _ = Router();

_.use(process.env.BASE_URL, authRoutes)
_.use(process.env.BASE_URL,(req,res)=>{
     res.status(400).json(new ApiError(false,null,400,"api invalid routes"))
})
   module.exports = _;
   